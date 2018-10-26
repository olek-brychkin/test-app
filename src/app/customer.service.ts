import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  public taskList = [
    {"name" : "First task", "comments" : ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed dapibus ligula vitae ipsum fermentum rutrum.","Proin lobortis quam sit amet ante ultrices, quis fermentum magna luctus. Donec nunc metus, posuere efficitur sem vitae, sagittis mollis orci. Aliquam vel facilisis eros. Phasellus dictum lorem vitae eros porttitor suscipit. Nulla tristique, lacus ut gravida facilisis, nunc enim porta turpis, quis semper ante leo eu augue. Phasellus ipsum ex, bibendum vitae nulla quis, facilisis fermentum ex. Quisque rhoncus, tellus vitae mattis rutrum, erat justo pharetra elit, eu tincidunt magna urna sed nisl. Nullam porta risus eget mauris tincidunt, eu eleifend dolor luctus. Nam ut odio magna. Nullam ut porta ligula. Fusce vel efficitur magna. Praesent lacinia urna semper quam viverra ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed at ullamcorper augue. Praesent vel nisl in magna ornare sodales. Vivamus vel arcu mi. Nulla bibendum sollicitudin sem, et dapibus quam condimentum sed. Pellentesque eget eros elementum, rhoncus justo eu, scelerisque urna. Nullam dignissim lacus a ante rutrum, ac tincidunt sapien auctor. Cras sit amet tortor nunc. Aliquam aliquam rhoncus lectus, a placerat metus scelerisque quis."]},
    {"name" : "Second task", "comments" : ["Nulla ut risus volutpat, semper diam id, tristique metus. Vivamus sagittis dui at congue feugiat. Quisque vel placerat velit. Proin id sapien quam. Phasellus et sodales nisl. Nulla euismod scelerisque ligula, sit amet interdum felis dapibus non. Etiam tristique ullamcorper dui vel blandit. Nulla ac orci elit. Donec ullamcorper augue non nibh tristique ornare. Vestibulum mollis venenatis tellus, vitae dignissim urna imperdiet sit amet. Nulla facilisi. Morbi eleifend condimentum lectus eget congue. Etiam rhoncus quis eros ac posuere.","Maecenas ac purus ac odio tincidunt semper ut et lectus. Aliquam porta dui at pharetra scelerisque. In ac mauris vitae nibh eleifend sodales nec lobortis sem. Maecenas urna nisl, sagittis id dui ut, facilisis ornare nisi. Vestibulum consectetur sodales ornare. Nunc vitae ornare ligula. Fusce ultrices mollis libero ut consectetur."]},
  ];

}