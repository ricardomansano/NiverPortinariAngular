import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoRadioGroupOption, PoCheckboxGroupOption, 
  PoSelectOption, PoMultiselectOption } from '@portinari/portinari-ui'; // [*Form]

@Component({
  selector: 'app-nivers',
  templateUrl: './nivers.component.html',
  styleUrls: ['./nivers.component.css']
})
export class NiversComponent implements OnInit {
  nivers = Array(); // Array vazio de aniversarios 
  f_person: string = ''; 
  f_birthday: string;
  f_switch: string;
  f_combo: string;
  f_select: string;
  f_number: number;
  f_email: string;
  f_website: string;
  f_password: string;
  f_upload: string;
  f_radio: number;
  f_checkbox: Array<string>;
  f_multiselect: Array<string>;
  f_textarea: string;

  // Itens do po-select
  public readonly selectOptions: Array<PoSelectOption> = [
    { value: 'vermelho', label: 'vermelho' },
    { value: 'azul', label: 'azul' },
    { value: 'amarelo', label: 'amarelo' }
  ];

  // Itens do po-radio-group
  public readonly radionOptions: Array<PoRadioGroupOption> = [
    { label: 'Opção 1', value: 1 },
    { label: 'Opção 2', value: 2 },
    { label: 'Opção 3', value: 3 }
  ];

  // Itens do po-checkbox-group
  public readonly checkboxOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Opção 1' },
    { value: '2', label: 'Opção 2'},
    { value: '3', label: 'Opção 3'}
  ];

  // Item do po-multiselect
  public multiselectOptions: Array<PoMultiselectOption> = [
    { value: '1', label: 'vermelho' },
    { value: '2', label: 'azul' },
    { value: '3', label: 'amarelo' },
    { value: '4', label: 'verde' },
    { value: '5', label: 'laranja' },
  ];

  constructor(private route: ActivatedRoute){}

  ngOnInit() { }

  // [*Submit]
  onClickSubmit(form){
    this.nivers.push({ list: [form.value.f_birthday, form.value.f_person] } )

    form.reset()
    this.f_person = ''
  }

  // [*Delete_Item]
  delNiver(idx){
    this.nivers.splice(idx, 1)
  }

  // [*Form: Essa funcao vai ser responsavel por habilitar o botao submit quando nome for preenchido]
  validForm(){
    return (this.f_person !== '')
  }

  // Disparado quando o campo Person ganhar foco
  personEnter(s){
    console.log(s)
  }

}

@Component({
  selector: 'niver-item',
  // [*Template_Item]
  template: `
    <div style='
        margin: 0;
        margin-bottom: 1;
        border-bottom-color: #808080;
        border-bottom-style: solid;
        border-bottom-width: 1;'
        >
       
        <po-button
            p-icon="po-icon-delete"
            p-type="link"
            (p-click)="delNiver()"
        >
        </po-button>

        | {{this.f_birthday}} | {{this.f_person}}
    </div>
  `,
  styleUrls: ['./nivers.component.css']
})
export class NiverComponentItem implements OnInit {
  // [*InputParams] Define parametros de entrada, um para cada
  @Input() f_birthday: string;
  @Input() f_person: string;
  @Input() idx: number;

  // [*Interop] Passando o NiverComponent no construtor eh possivel
  //            utiliza-lo para fazer a chamada de sua funcao delNiver()
  // https://stackoverflow.com/questions/37587732/how-to-call-another-components-function-in-angular2
  constructor( private parent: NiversComponent ) {  }

  ngOnInit() { }

  delNiver(){
    this.parent.delNiver(this.idx)
  }

}
