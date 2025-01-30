import {Component, computed, effect, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';

import {DataService} from './services/data.service';

import {Column, User, UserKeys} from './interface/user';

import {Table, TableModule} from 'primeng/table';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {InputText} from 'primeng/inputtext';
import {SelectButton} from 'primeng/selectbutton';
import {Tag} from 'primeng/tag';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TableModule,
    IconField,
    InputIcon,
    FormsModule,
    SelectButton,
    Tag,
    InputText
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly UserKeys = UserKeys;

  value = signal<string[]>([]);
  users = signal<User[]>([]);
  cols = signal<Column[]>([]);

  #dataService: DataService = inject(DataService);

  filteredCols = computed(() => {
    return this.cols().filter(col => !this.value().includes(col.field));
  })

  constructor() {
    this.#dataService.getUsers().subscribe((users: User[]) => {
      this.users.set(users);
    })

    this.generateCols();

    effect(() => {
      console.log("Users updated: ", this.users());
      console.log("Value updated : ", this.value());
      console.log("Filtered cols: ", this.filteredCols());
    })
  }

  public globalSearch(evt: Event, dt: Table): void {
    const value = (evt.target as HTMLInputElement).value;
    dt.filterGlobal(value, 'contains');
  }

  protected generateCols(): void {
    const cols: Column[] = Object.keys(this.users()[0])
      .map((key: string) => ({
        field: key,
        header: key.charAt(0).toUpperCase() + key.slice(1),
      }));

    this.cols.set(cols)
  }
}
