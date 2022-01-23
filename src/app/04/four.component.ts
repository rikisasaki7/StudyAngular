import { Component, OnInit, OnDestroy } from '@angular/core';

import { EventComponent } from './event/event.component';
import { BookComponent } from './books/books.component';
import { WingComponent } from './wings/wing.component';

@Component({
  selector: 'my-app-four',
  templateUrl: './four.html',
  styleUrls: ['./four.css']
  // styles: [`
  //   .back { background-color: #f00}
  //   .fore { color: #fff}
  //   .space { padding: 15px }
  //   `]
})

export class FourComponent implements OnInit, OnDestroy{ 

  title: string = 'WINGS project'
  obj: any = {
    name: 'トクジロウ',
    gender: undefined,
    birth: new Date(2022, 1, 1),
    age: 3,
    family: ['aa', 'bb', 'cc'],
    work: function(){ /* メソッド*/ },
    other: {
      favorite: '11111',
      memo: 'memo'
    }
  }

  str: string = 'いろはにほへと'
  str2: string[] = ['い','ろ','は','に']
  price: number = 3500.1256
  num: number = 0.123456
  current = new Date()

  // favs: string[] = []
  favs: string[] = [ 'やまだ']
  // favs: string[] = [ 'やまだ', 'たなか']
  messages = {
    '=0': 'いいねされていません',
    '=1': '１人',
    'other': '#人',
  }

  members: any = [
    {name2: 'bbbbb', sex: 'female'},
    {name2: 'cccccc', sex: 'male'},
    {name2: 'ddddd', sex: 'unknown'}
  ]

  messages2 = {
    'male': '彼',
    'female': '彼女',
    'unknown': 'なぞ'
  }

  show: boolean = false
  show2: boolean = true
  show3: boolean = true

  books = [
    {
      isbn: '978-4-7741-8411-1',
      title: '改訂新版JavaScript本格入門',
      price: 2980,
      publisher: '技術評論社',
    },
    {
      isbn: '978-4-7980-4853-6',
      title: 'はじめてのAndroidアプリ開発 第2版',
      price: 3200,
      publisher: '秀和システム',
    },
    {
      isbn: '978-4-7741-8030-4',
      title: '［改訂新版］Javaポケットリファレンス',
      price: 2680,
      publisher: '技術評論社',
    },
    {
      isbn: '978-4-7981-3547-2',
      title: '独習PHP 第3版',
      price: 3200,
      publisher: '翔泳社',
    },        
    {
      isbn: '978-4-8222-9893-7',
      title: '基礎からしっかり学ぶC++の教科書',
      price: 2800,
      publisher: '日経BP社',
    },
        {
      isbn: '978-4-7741-8883-6',
      title: 'Ruby on Rails 5アプリケーションプログラミング',
      price: 3600,
      publisher: '技術評論社',
    },
        {
      isbn: '978-4-7981-5081-9',
      title: 'デザインサンプルで学ぶCSSによる実践スタイリング入門  ',
      price: 1600,
      publisher: '翔泳社',
    }
  ]

  data = [ '子', '丑', '寅', '卯', '辰', '巳', 
    '午', '未', '申', '酉', '戌', '亥' 
  ]
  
  articles = [
    {
      title: '改訂新版JavaScript本格入門',
      body: '「ECMAScript 2015」による新記法はもちろん、基本からオブジェクト指向構文、Ajax、クライアントサイド開発まで詳しく解説しています。',
      author: '山田祥寛'
    }
    , {
      title: 'Swiftポケットリファレンス',
      body: 'iOSのフレームワークの解説から全く新しい操作性を実現する3D Touchまで網羅。',
      author: '片渕彼富'
    }
    , {
      title: '［改訂新版］Javaポケットリファレンス',
      body: '初版でのJava SE 6までの標準ライブラリに加え，Java SE 7や8で追加された機能も扱っています。',
      author: '高江賢'
    },
  ]

  bookstrc = [
    { isbn: '978-4-7741-8411-1', 
      title: '改訂新版JavaScript本格入門' },
    { isbn: '978-4-7980-4853-6', 
      title: 'はじめてのAndroidアプリ開発 第2版' },
    { isbn: '978-4-7741-8030-4', 
      title: '［改訂新版］Javaポケットリファレンス' }
  ]

  onclick(){
    this.bookstrc = [
      { isbn: '978-4-7741-8411-1', 
        title: '改訂新版JavaScript本格入門' },
      { isbn: '978-4-7980-4853-6', 
        title: 'はじめてのAndroidアプリ開発 第2版' },
        { isbn: '978-4-7741-8411-1', 
        title: '［改訂新版］Javaポケットリファレンス' },     
        { isbn: '978-4-7741-8411-1', 
        title: '独習PHP 第3版' }
    ];
  }

  trackFn(index: any, book: any): string {
    return book.isbn
  }

  start = 0
  len = 3
  pager(page: number){
    this.start = this.len * page
  }

  styleAAA = {
    // backgroundColor: '#f00',
    // color: '#fff',
    // fontWeight: 'bold',
    // margin: '15px',
    // padding: '15px'
    'background-color': '#f00',
    color: '#fff',
    'font-weight': 'bold',
    'margin.px': '15',
    'padding.px': '15px'
  }

  back: boolean = false
  fore: boolean = false
  space: boolean = false

  get stylesGet() {
    return {
      'background-color': this.back ? '#f00' : '',
      'color': this.fore ? '#fff' : '',
      'padding.px': this.space ? 15 : 5
    }
  }

  stylesBool = {
    back: false,
    fore: false,
    space: false
  }

  flag = false

  // favs2: string[] = ['やまだりお', 'まいける', 'たかし']
  favs2: string[] = ['やまだりお']

  // デフォルトの選択値
  temp = 0
  // 書籍情報はbooks参照

  helhel = {$implicit: 'こんにちは', name:'ああああいいいいい'}


  interval: any // タイマー
  comps = [ EventComponent, BookComponent, WingComponent]
  currentI = 0 // 現在のコンポーネント(インデックス)
  banner: any = EventComponent // 現在のコンポーネント(オブジェクト)

  // コンポーネント切り替えのためのタイマーを準備
  ngOnInit(){
    this.interval = setInterval(() => {
      // インデックスを更新し、コンポーネントを変更
      this.currentI = (this.currentI + 1) % this.comps.length
      this.banner = this.comps[this.currentI]
    }, 3000)
  }

  // コンポーネント破棄の際にタイマーを破棄
  ngOnDestroy(){
    clearInterval(this.interval)
  }

}
