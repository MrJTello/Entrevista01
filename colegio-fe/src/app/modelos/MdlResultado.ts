export class MdlResultado
{
    hayError:boolean;
    mensaje:string;
    data:any;
    constructor(){
        this.hayError = true;
        this.mensaje = "";
        this.data = null;
    }
}