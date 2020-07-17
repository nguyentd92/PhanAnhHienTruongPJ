import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface QueryDataModel {
  searchName: string;
  pageIndex: string;
  pageSize: string;
  filter: string[];
}

const QUERY_DATA_ENDPOINT = ""

@Injectable({
  providedIn: 'root',
})

export class PostManagerService {
  constructor(private http: HttpClient) {}

  queryData(params: QueryDataModel) {
    this.http.get(QUERY_DATA_ENDPOINT, {params: {...params}})
  }
}
