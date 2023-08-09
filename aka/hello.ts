// @see https://docs.aircode.io/guide/functions/
import aircode from 'aircode';

export default async function (params: any, context: any) {
  console.log('Received params:', params);
  const a = 2122;
  
  return {
    message: 'Hi, AirCode.',
  };
};
