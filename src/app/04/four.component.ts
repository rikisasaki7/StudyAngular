import { Component } from '@angular/core';

@Component({
  selector: 'my-app-four',
  templateUrl: './four.html'
})

export class FourComponent { 

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
      isbn: 'aaaaaaaaaaaaaa',
      title: 'titleaaaaaaaaa',
      price: 2980,
      publisher: 'pubaaaaaaaaaa'
    }
    , {
      isbn: 'bbbbbbbbbbbbb',
      title: 'titlebbbbbbbb',
      price: 3000,
      publisher: 'pubbbbbbbb'
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
}
