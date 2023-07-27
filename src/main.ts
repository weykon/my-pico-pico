import * as ds from "@devicescript/core";

const lb = new ds.LightBulb();
setInterval(async () => {
  await lb.on(await lb.intensity.read() > 0 ? 0 : 1);
  console.log(':)')
}, 1000);
