import { ModuleA } from "./moduleA";
export const container = <T>(): any => {

    const time = new Date().valueOf()+""
  const moduleA = new ModuleA(time);
  const moduleB = new ModuleA(new Date().getMilliseconds.toString());

  return { moduleA, moduleB };
};
