import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";

export class Rocket implements Payload {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    massKg: number;

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let total: number = 0;
        for(let i: number = 0; i<items.length; i++){
            total += items[i].massKg;
        }
        return total;
    }
    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
    canAdd( item: Payload ): boolean {
        if((this.currentMassKg() + item.massKg) <= this.totalCapacityKg){
            return true;
        } else {
            return false;
        }
    }
    addCargo( cargo: Cargo ): boolean {
        if(this.canAdd(cargo) === true){
            this.cargoItems.push(cargo);
            return true;
        } else{
            return false;
        }
    }
    addAstronaut( astronaut: Astronaut ){
        if(this.canAdd(astronaut) === true){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
    
}