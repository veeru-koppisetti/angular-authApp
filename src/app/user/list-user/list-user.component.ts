import { Component, OnInit , Inject, OnChanges} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../_models/user.model";
import {ApiService} from "../../_services/api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{

  users:any=[];
  
  addForm: FormGroup;

  constructor(private router: Router, private apiService: ApiService,private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      fullname: ['', Validators.required],
      title: ['', Validators.required],
      department: ['', Validators.required],
      location: ['', Validators.required],
      age: ['', Validators.required],
    });

    this.users=[{"id": 1,"fullname": "test1","title": "test1","department": "test1","location": "test1",
      "age": 24 },{"id": 2,"fullname": "test13","title": "test13", "department": "test13","location": "test13",
  "age": 24},{"id": 3,"fullname": "test13","title": "test13", "department": "test13","location": "test13",
  "age": 25}]}

  deleteUser(user: User): void {
        this.users = this.users.filter(u => u !== user);
  };

  editUser(user: User): void {
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };

  
  onSubmit() {
    const param={"id": 4,"fullname": this.addForm.value.fullname,"title": this.addForm.value.title,"department": this.addForm.value.department,"location": this.addForm.value.location,"age": this.addForm.value.age}
    this.users.push(param)
    this.addForm.reset();
  }
}
