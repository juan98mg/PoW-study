import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { Router } from '@angular/router';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent {
  constructor(private router: Router) {
    this.dataSource.data = TREE_DATA;
  }

  private _transformer = (node: SkillNode, level: number): ExtendedFlatNode => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      path: node.path || '',
    };
  };

  treeControl = new FlatTreeControl<ExtendedFlatNode>(
    (node: ExtendedFlatNode) => node.level,
    (node: ExtendedFlatNode) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: FlatNode) => node.expandable;

  @ViewChild('treeContainer')
  treeContainer!: ElementRef;

  onResizeEnd(event: ResizeEvent): void {
    const { width } = event.rectangle;
    const maxWidth = window.innerWidth * 0.5;
    const minWidth = window.innerWidth * 0.15;
    let newWidth = width;

    if (width && width > maxWidth) {
      newWidth = maxWidth;
    } else if (width && width < minWidth) {
      newWidth = minWidth;
    }
    this.treeContainer.nativeElement.style.width = `${newWidth}px`;
  }

  handleNodeClick(path: string) {
    this.router.navigate([path]);
  }
}

interface SkillNode {
  name: string;
  path?: string;
  children?: SkillNode[];
}

const TREE_DATA: SkillNode[] = [
  {
    name: 'Golang',
    path: 'golang',
    children: [
      {
        name: 'Blockchain',
        path: 'golang/blockchain',
        children: [
          { name: 'Conceptos Base', path: 'golang/blockchain/basic-concepts' },
        ],
      },
    ],
  },
];

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

interface ExtendedFlatNode extends FlatNode {
  path: string;
}
