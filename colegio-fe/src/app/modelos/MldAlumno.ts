export class MdlAlumno
{
    public id:number;
    public nombre:string;
    public apellidos:string;
    public genero:string;
    public fechaNacimiento:Date;
    constructor(){
        this.id=0;
        this.nombre = "";
        this.apellidos = "";
        this.genero = "";
        this.fechaNacimiento = new Date();
    }
}

interface MdlAlumnoSel
{
    pId:number;
}

export class MdlAlumnoIns
{
    public pNombre:string = '';
    public pApellidos:string = '';
    public pGenero:string = '';
    public pFechaNacimiento:Date = new Date();

    constructor(){}
}

export class MdlAlumnoUpd
{
    public pId:number = 0;
    public pNombre:string = '';
    public pApellidos:string = '';
    public pGenero:string = '';
    public pFechaNacimiento:Date = new Date();

    constructor(){}
}