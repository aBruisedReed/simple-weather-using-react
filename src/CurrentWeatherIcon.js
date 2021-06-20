import React from 'react';
import { WiDaySunny, WiNightClear, WiDayCloudy, WiCloud, WiCloudy, WiShowers, WiRain, WiThunderstorm, WiSnow, WiWindy, WiNightCloudy } from 'weather-icons-react';

function CurrentWeatherIcon({ code, color, size }) {
  switch(code) {
    case '01d':
      return (<WiDaySunny size={size} color={color} />)
    case '01n':
      return (<WiNightClear size={size} color={color} />)
    case '02d':
      return (<WiDayCloudy size={size} color={color} />)
    case '02n':
      return (<WiNightCloudy size={size} color={color} />)
    case '03d': case '03n':
      return (<WiCloud size={size} color={color} />)
    case '04d': case '04n':
      return (<WiCloudy size={size} color={color} />)
    case '09d': case '09n':
      return (<WiShowers size={size} color={color} />)
    case '10d': case '10n':
      return (<WiRain size={size} color={color} />)
    case '11d': case '11n':
      return (<WiThunderstorm size={size} color={color} />)
    case '13d': case '13n':
      return (<WiSnow size={size} color={color} />)
    case '50d': case '50n':
      return (<WiWindy size={size} color={color} />)
    default:
      throw new Error(`unvalid weather code:${code}`)
  }
}

export default CurrentWeatherIcon;
