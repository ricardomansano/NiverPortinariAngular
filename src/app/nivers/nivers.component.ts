import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nivers',
  templateUrl: './nivers.component.html',
  styleUrls: ['./nivers.component.css']
})
export class NiversComponent implements OnInit {
  title: string;
  nivers = Array(); // Array vazio de aniversarios 
  person: ''; 
  birthday: '';

  constructor(private route: ActivatedRoute){}

  ngOnInit() { 
    this.person = '';
    this.birthday = '';

    // [*QueryParams] Recupera queryparams passados no routerLink
    this.route.queryParams.subscribe(params => {
        this.title = params.title;
    });
  }

  // [*Submit]
  onClickSubmit = (form) => {
    this.nivers.push({ list: [form.value.birthday, form.value.person] } )

    // Limpa o valor do campo depois do submit
    form.reset()
    this.person = '';
    this.birthday = '';
  }

  // [*Delete_Item]
  delNiver = (idx) => {
    this.nivers.splice(idx, 1)
  }

  // [*Form: Essa funcao vai ser responsavel por habilitar o botao submit quando nome for preenchido]
  validForm = () => {
    return (this.person !=="")
  }

}

@Component({
  selector: 'niver-item',
  // [*Template_Item]
  template: `
    <div style='
        margin: 0;
        margin-bottom: 2;
        border-bottom-color: #ff0000;
        border-bottom-style: dotted;
        border-bottom-width: 1;'
        >
       
        <po-button
            p-icon="po-icon-delete"
            p-type="link"
            (p-click)="delNiver()"
        >
        </po-button>

        | {{this.birthday}} | {{this.person}}
    </div>
  `,
  styleUrls: ['./nivers.component.css']
})
export class NiverComponentItem implements OnInit {
  // [*InputParams] Define parametros de entrada, um para cada
  @Input() birthday: string;
  @Input() person: string;
  @Input() idx: number;

  // [*Interop] Passando o NiverComponent no construtor eh possivel
  //            utiliza-lo para fazer a chamada de sua funcao delNiver()
  // https://stackoverflow.com/questions/37587732/how-to-call-another-components-function-in-angular2
  constructor( private parent: NiversComponent ) {  }

  ngOnInit() { }

  delNiver = () => {
    this.parent.delNiver(this.idx)
  }

}
