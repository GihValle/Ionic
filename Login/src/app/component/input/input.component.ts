import { Component, Input } from '@angular/core';

type InputTypes = "text" | "email" | "password";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() type: InputTypes = "text";
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Input() inputName: string = "";

  value: string = '';
  onChage: any = () => {}
  onTouched: any = () => {}

  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value
    this.onChage(value);
  }

  writeValue(value: any): void{
    this.value = value;
  }

  registerOnChange(fn: any): void{
    this.value = fn;
  }

  registerOnTouched(fn: any): void{
    this.value = fn;
  }

  setDisableState(isDisabled:boolean):void{};

}
