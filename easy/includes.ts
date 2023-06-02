type Includes<T extends any[], Value> = 
T extends [infer FIRST,...infer REST] ? 
Equal<Value,FIRST> extends true ? true : Includes<REST,Value> : false