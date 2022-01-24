import { Component, Sanitizer } from '@angular/core';
// サニタイズ
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'my-app-three',
  templateUrl: './three.html',
  styleUrls : ['./three.css']
})

export class ThreeComponent { 
  name = 'Angularaaaaa'; 
  member = {
    name: "aaaaa",
    age: 30
  }

  image = 'http://www.wings.msn.to/image/wings.jpg'

  msg: string = `
    <script> window.alert("ようこそ！");</script>
    <div style="font-size:20px;> 
      <p>WINGS プロジェクト</p> 
    </div> 
    <a href="http://www.wings.msn.to/">Web</a>
  `

  safeMsg: SafeHtml
  constructor(private sanitizer: DomSanitizer){
    // msgプロパティの内容に信頼済みマークを付与
    this.safeMsg = sanitizer.bypassSecurityTrustHtml(this.msg)

    // urlプロパティの内容に信頼済みマークを付与
    this.safeUrl = sanitizer.bypassSecurityTrustResourceUrl(this.url)
  }

  url = 'http://www.wings.msn.to/'
  safeUrl: SafeResourceUrl

  len = 4

  flag = false

  bcolor = '#0ff'
  bcolorFlag = false

  size: number = 150
  sizesize: string = '200%'

  myname = '山田'
  myname2 = '山田2'
}
