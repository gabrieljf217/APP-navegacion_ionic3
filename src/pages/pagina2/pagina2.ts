import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Pagina3Page } from '../index.paginas';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  mutantes:any[]=[
    {
			"nombre":"Charles Xavier",
			"descripcion": "A lo largo de la mayoría de su historia Xavier es parapléjico. Cuenta con la mente mutante más poderosa del mundo. Como telépata que es, Xavier puede leer, controlar e influir en la mente humana. Es un genio científico con una habilidad sobrehumana para absorber información, siendo además una autoridad líder en genética, mutación y poderes psiónicos."
		},
		{
			"nombre":"Max Eisenhardt",
			"descripcion": "Es el villano central en la colección X-Men, así como en programas de televisión y películas de esa franquicia."
		},
		{
			"nombre":"James Logan",
			"descripcion": "El linaje de los Hudson, una antigua y honorable familia de Canadá, desciende de una sub-raza humana evolucionada a partir de los lobos, conocidos como los Lupinos."
		}
  ];

  pagina3:any=Pagina3Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }
  
  
  irpagina3(mutante:any){
    this.navCtrl.push(Pagina3Page,{ "mutante":mutante });
    
  }

  


}
