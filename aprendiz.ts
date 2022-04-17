export enum NivelEducativo{
    BACHILLERATO = "Bachillerato",
    UNIVERSITARIO = "Universitario",
    POSGRADO = "Posgrado"
}

export class Aprendiz{
    constructor(public nombre: string, public apellidos: string, public avatar: string, public edad: number, public nivelEducativo: NivelEducativo)
    {

    }

}