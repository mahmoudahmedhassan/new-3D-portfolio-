import { useEffect, useState, useMemo } from "react";
import {
    Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import sortBy from "lodash/sortBy";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json";

const Map = () => {
  const [data, setData] = useState([]);
  const [maxValue, setMaxValue] = useState(0);

  useEffect(() => {
    csv("/data.csv").then((cities) => {
      const sortedCities = sortBy(cities, (o) => -o.population);
      setMaxValue(sortedCities[0].population);
      setData(sortedCities);
    });
  }, []);

  const popScale = useMemo(
    () => scaleLinear().domain([0, maxValue]).range([0, 24]),
    [maxValue]
  );

  return (
    <ComposableMap projectionConfig={{ rotate: [-10, 0, 0] }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill="#DDD" />
          ))
        }
      </Geographies>
      <Annotation
        subject={[31.4913182, 30.007413]}
        dx={-90}
        dy={-10}
        connectorProps={{
          stroke: "purple",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-12" textAnchor="end" alignmentBaseline="middle" fill="purple" className="text-3xl">
          {"Cairo"}
        </text>
      </Annotation>
      
      {data.map(({ city_code, lng, lat, population }) => {
        return (
          <Marker key={city_code} coordinates={[lng, lat]}>
            <circle fill="#F53" stroke="#FFF" r={popScale(population)} />
          </Marker>
        );
      })}
    </ComposableMap>
  );
};

export default Map;
