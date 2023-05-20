import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {


  constructor(){
    this.dataSource.data = TREE_DATA;
  }

  private _transformer = (node: SkillNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  @ViewChild('treeContainer')
  treeContainer!: ElementRef;


  onResizeEnd(event: ResizeEvent): void {
    const { width } = event.rectangle;
    const maxWidth = window.innerWidth * 0.50;
    const minWidth = window.innerWidth * 0.15;
    let newWidth = width;

    if (width && width > maxWidth) {
      newWidth = maxWidth;
    } else if (width && width < minWidth) {
      newWidth = minWidth;
    }
    this.treeContainer.nativeElement.style.width = `${newWidth}px`;
  }

}


interface SkillNode {
  name: string;
  children?: SkillNode[];
}

const TREE_DATA: SkillNode[] = [
  {
    name: 'JavaScript',
    children: [{name: 'Angular'}, {name: 'React'}, {name: 'NestJS'}],
  },
  {
    name: 'Golang',
    children: [
      {
        name: 'Blockchain',
        children: [{name: 'Conceptos Base'}, {name: 'PoW'}],
      },
      {
        name: 'REST API',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}