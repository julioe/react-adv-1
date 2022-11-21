

export const tarea1 = () => {
   // Tipos
    const batman:   string = 'Bruce';
    const superman: string = 'Clark';
    
    const existe: boolean = false;
    
    // Tuplas
    const parejaHeroes: [string, string]      = [batman,superman];
    const villano: [string, number, boolean]  = ['Lex Lutor',5,true];
    
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
    
        //Enumeraciones
        enum FuerzaHeroica {
          acuaman  = 0,
          batman   = 1,
          flash    = 5,
          superman = 100,
        }

    const fuerzaFlash: FuerzaHeroica = FuerzaHeroica.flash;
    const fuerzaSuperman = FuerzaHeroica.superman;
    const fuerzaBatman = FuerzaHeroica.batman;
    const fuerzaAcuaman = FuerzaHeroica.acuaman;
                 //  console.log(FuerzaHeroica);
                    
    // Retorno de funciones
    function activar_batiseñal(): string {
      return 'activada';
    }
         //console.log(activar_batiseñal() );
          

    function pedir_ayuda(): void  {
      console.log('Auxilio!!!');
    }
         //

    
    // Aserciones de Tipo  //casteo
    const poder: any = '100';
    const largoDelPoder: number = (poder as string).length;
    //console.log( largoDelPoder );
    
    
  }
  
  