import '../styles/custom-styles.css'
//import { tarea1 } from '../tarea/app'

export const CursoTypeScript = () => {

  //tarea1();

    // const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // let avengers: number = 10;
    // const villians = [ 'Omega Rojo', 'Thanos', 'Darth Vader', 'Octopus', 'Duende verde' ] 
    // let isSuperman:boolean = true;
    // let isBatman:boolean = false;
    // const batman: string = 'Batman';
    // const linternaVerde = "Linterna Verde";
    // const volcanNegro = ` Héree: Volcan Negro`
    // const hero: [string, number, boolean] = [ 'Dr strange', 110, true]
    
   
    // function callBatman(): void {   // void significa vacio
            //     return;
            // } 

            // const callSuperMan = (): void => {
            //       return
            // }

            // const a = callBatman()
            // console.log(a);
            


    // hero[0] = 'IronRocket';
      // hero[1] = 50;
      // hero[2] = false;
      //   console.log(hero);
        
      //  isSuperman = (isBatman) ? true :  false;
           // if( avengers < villians ){
        //   console.log('Estamos en problemas');
        // }else{
        //   console.log('Nos salvamos');
          
        // }
        // console.log(avengers);

        //console.log(`I'm ${batman}, ${avengers}`);
        
    //       console.log(batman[5]?.toUpperCase() || 'No esta disponible'  );
    //  console.log(numbers);
          
              //villians.forEach( v => console.log( v.toUpperCase() ) );




  return (
    <div className='myTsPage'>
      <a target='_blank' rel='noreferrer' href='https://www.udemy.com/course-dashboard-redirect/?course_id=1033544'>
      <h3 className='text-white'>
      CursoTypeScript
      </h3>
      </a>
      < hr />
<ul style={{ color: 'white' }}>
      <li>Numbers</li>
      <li>Strings</li>
      <li style={{ display:'flex' }}>Palabra reservada 
        <h4 style={{ color: 'aquamarine', display:'flex' }}>   as string 
            <p className='text-white' style={{ display:'flex' }}>o puede usarse el casteo asi: </p  > 
           &lt;string&gt;   </h4>    
      </li>
      <li> Arreglos</li>
      <li>Dupla</li>
      <li>Enum</li>
      <li>void</li>
      <li>never</li>
      <li>undefined</li>

</ul>
      </div>
  )
}
