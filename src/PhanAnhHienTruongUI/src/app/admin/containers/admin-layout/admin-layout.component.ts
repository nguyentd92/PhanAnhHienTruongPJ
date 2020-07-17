import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.sass'],
})
export class AdminLayoutComponent {
  searchValue = '';

  visible = false;

  total = 100;

  loading = false;

  filterName = [
    {
      text: 'Đã duyệt',
      value: '1',
    },
    {
      text: 'Chưa duyệt',
      value: '1',
    },
    {
      text: 'Đã xoá',
      value: '1',
    },
  ];

  search(): void {
    this.visible = false;

    // Set loading to true
    this.loading = true;

    // Logic

    console.log(this.searchValue);

    // Setloading to false
    timer(2000).subscribe(() => (this.loading = false));
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  nameFilterFn = (list: string[], item: any) =>
    list.some((name) => item.name.indexOf(name) !== -1);

  expandSet = new Set<number>();

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  listOfData = [
    {
      id: 1,
      name: 'John Brown',
      age: 32,
      expand: false,
      address: 'New York No. 1 Lake Park',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      id: 2,
      name: 'Jim Green',
      age: 42,
      expand: false,
      address: 'London No. 1 Lake Park',
      description:
        'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 32,
      expand: false,
      address: 'Sidney No. 1 Lake Park',
      description:
        'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
  ];

  onChangePageIndex(index: string) {
    // Set loading to true
    this.loading = true;

    // Logic

    console.log(index);

    // Setloading to false
    timer(2000).subscribe(() => (this.loading = false));
  }
}
