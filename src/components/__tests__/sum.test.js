import { hasUncaughtExceptionCaptureCallback } from "process";
import { Sum } from "../Sum";
test("sum function should give the addition of passed values",()=>{
    const result = Sum(3,4);
    //assertion
    expect(result).toBe(7);
});