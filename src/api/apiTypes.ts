export interface MetaDataAPI {
  total: number; //24;
  per_page: number; //10;
  current_page: number; //1;
  last_page: number; //3;
  first_page: number; //1;
  first_page_url: string; //'/?page=1';
  last_page_url: string; //'/?page=3';
  next_page_url: string | null; //'/?page=2';
  previous_page_url: string | null;
}

/**
 * @description Interface que define  formato de uma página de dados da API
 * @template Data do dado da página
 */
export interface PageAPI<Data> {
  meta: MetaDataAPI;
  data: Data[];
}
