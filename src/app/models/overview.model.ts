export class Overview {
    
        public _id
        public name: string;
        public description: string;
        public hoeveelheid: number;       
          
        constructor(name: string, desc:string, hoev: number) {
            this.name = name;
            this.description = desc;
            this.hoeveelheid = hoev;
        }
    }   