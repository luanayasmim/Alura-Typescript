import { Imprimivel } from "../utils/imprimivel";
import { Comparavel } from "./comparavel";

/*
    Em typescript não é possivel ter herança multipla entre classes,
    porém ele permite que uma interface herde várias outras
*/

export interface Modelo<T> extends Imprimivel, Comparavel<T>{

}