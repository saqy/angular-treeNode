import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})

export class TreeComponent implements OnInit {
  @Input() treeData: FoodNode[];
  dataSource: FoodNode[]; 
  hasChild: Boolean;
  defaultImage="https://via.placeholder.com/150"
  constructor() {
    
    this.hasChild=false;
  }

  ngOnInit(): void {
  }

  showCildren(node) {
    if (node.children){
      node['showCildren'] = !node['showCildren'];
    }
  }

}
