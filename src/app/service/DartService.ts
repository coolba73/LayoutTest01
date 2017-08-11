import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class DartService{

    // private mykey : string = "0624d0ad892c83cbf5e17b7fab117787211b8769";
    // private url : string = "http://dart.fss.or.kr/api/search.json?auth=" + this.mykey;

    private url : string = "http://localhost:62988/api/DartTest";


    /*
    http://dart.fss.or.kr/api/search.json?auth=0624d0ad892c83cbf5e17b7fab117787211b8769&crp_cd=000270&start_dt=19990101&bsn_tp=A001&bsn_tp=A002&bsn_tp=A003

    https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20160516003622
    https://dart.fss.or.kr/pdf/download/main.do?rcp_no=20160516003622&dcm_no=5147379
    https://dart.fss.or.kr/pdf/download/excel.do?rcp_no=20160516003622&dcm_no=5147379&lang=ko
    
    */

    constructor(private http : Http){}

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    GetFinancialReportFromDart(){

        return this.http.get(this.url).map(res=>res.json());
    }
    

}//class