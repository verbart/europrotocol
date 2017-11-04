export default function () {
  const directions = [
    {
      path: 'one-way',
      title: 'ДТП, произошедшее при движении в одном направлении',
    },
    {
      path: 'backward',
      title: 'ДТП, произошедшее в противоположных направлениях'
    },
    {
      path: 'angular-motion',
      title: 'ДТП, произошедшее при движении пол углом друг к другу'
    },
    {
      path: 'backing',
      title: 'ДТП, произошедшее при движении задним ходом'
    },
    {
      path: 'hitting-standing-vehicle',
      title: 'ДТП, произошедшее при наезде на стоящее ТС'
    }
  ];

  const schemes = [
    {
      number: '1-1',
      title: 'При перестроении В не уступил дорогу А, двигавшемуся попутно справа от него. Таким образом, В нарушил п. 8.4 ПДД.',
      direction: 'one-way'
    },
    {
      number: '1-2',
      title: 'При перестроении В не уступил дорогу А, двигавшемуся попутно слева от него. Таким образом, В нарушил п. 8.4 ПДД.',
      direction: 'one-way'
    },
    {
      number: '1-3',
      title: 'При одновременном перестроении А и В, А не уступил дорогу В. Таким образом, А нарушил п. 8.4 ПДД.',
      direction: 'one-way'
    },
    {
      number: '1-4',
      title: 'Перед поворотом налево В не занял соответствующего положения и совершил столкновение с А. Таким образом, В нарушил п. 8.5 ПДД  [2].',
      direction: 'one-way'
    },
    {
      number: '1-5',
      title: 'Перед поворотом налево В не занял крайнее левое положение и совершил столкновение с А, также поворачивающим налево из крайнего левого положения либо с трамвайных путей попутного направления, расположенных на одном уровне с проезжей частью. Таким образом, В нарушил п. 8.5 ПДД [4].',
      direction: 'one-way'
    },
    {
      number: '1-6',
      title: 'В совершал поворот налево с трамвайных путей попутного направления, расположенных на одном уровне с проезжей частью, при наличии знака 5.15.1 (5.15.2). А перед поворотом налево не занял крайнюю левую полосу. Таким образом, А и В нарушили п. 8.5 ПДД [4].',
      direction: 'one-way'
    },
    {
      number: '1-7',
      title: 'А совершал поворот налево с крайней левой полосы. В совершал поворот налево с трамвайных путей попутного направления, расположенных на одном уровне с проезжей частью, при наличии знака 5.15.1 (5.15.2). Таким образом, В нарушил п. 8.5 ПДД [4].',
      direction: 'one-way'
    },
    {
      number: '1-8',
      title: 'А совершал поворот налево с крайней левой полосы проезжей части. В совершал поворот налево с трамвайных путей попутного направления, расположенных на одном уровне с проезжей частью. Таким образом, А нарушил п. 8.5 ПДД.',
      direction: 'one-way'
    },
    {
      number: '1-9',
      title: 'А и В совершали поворот направо. Причем А – с полосы торможения, В – с крайней правой полосы. Таким образом, В нарушил п. 8.10 ПДД',
      direction: 'one-way'
    },
    {
      number: '2-1',
      title: 'В выехал на полосу проезжей части, направление движения по которой может изменяться. А двигался по той же полосе на разрешающий сигнал реверсивного светофора. Таким образом, В нарушил п. 6.7 ПДД.',
      direction: 'backward'
    },
    {
      number: '2-2',
      title: 'А и В двигались по полосе проезжей части, направление движения по которой может изменяться, при выключенных сигналах реверсивного светофора, который расположен над полосой, обозначенной разметкой 1.9. Таким образом, А и В нарушили п. 6.7 ПДД.',
      direction: 'backward'
    },
    {
      number: '2-3',
      title: 'В двигался на спуск и не уступил дорогу А, объезжающему препятствие и следующему на подъем. Таким образом, В нарушил п. 11.7 ПДД.',
      direction: 'backward'
    },
    {
      number: '2-4',
      title: 'А двигался по трамвайным путям попутного направления, когда все полосы для движения были заняты. В выехал на трамвайные пути встречного направления, когда все полосы для движения были заняты. Таким образом, В нарушил п. 9.6 ПДД.',
      direction: 'backward'
    },
    {
      number: '2-5',
      title: 'А совершал обгон транспортного средства, которое в свою очередь совершало обгон или объезд препятствия. В процессе маневра А совершил столкновение с В, следовавшим во встречном направлении. Таким образом, А нарушил п. 11.5 ПДД.',
      direction: 'backward'
    },
    {
      number: '2-6',
      title: 'А выехал на полосу встречного движения при обгоне транспортного средства на нерегулируемом перекрестке, при движении по дороге, не являющейся главной, где совершил столкновение с В, Таким образом, А п. 11.5 ПДД.',
      direction: 'backward'
    },
    {
      number: '2-7',
      title: 'А двигался по средней полосе дороги, имеющей три полосы. В двигался по той же самой полосе. Таким образом, А и В нарушили п.9.3 ПДД.',
      direction: 'backward'
    },
    {
      number: '2-8',
      title: 'А выехал на полосу встречного движения при обгоне транспортного средства на регулируемом перекрестке, где совершил столкновение с В, Таким образом, А нарушил п. 11.5 ПДД.',
      direction: 'backward'
    },
    {
      number: '2-9',
      title: 'А выехал на полосу встречного движения при обгоне транспортного средства на нерегулируемом перекрестке, при движении по дороге, не являющейся главной, где совершил столкновение с В, Таким образом, А п. 11.5 ПДД.',
      direction: 'backward'
    },
    {
      number: '2-10',
      title: 'А двигался по крайней правой полосе дороги, имеющей три полосы. В выехал на эту полосу. Таким образом, В нарушил п.9.3 ПДД.',
      direction: 'backward'
    },
    {
      number: '3-1',
      title: 'А совершал поворот налево, В совершал поворот направо с крайней правой полосы (в том числе при наличии полосы торможения). Таким образом, А нарушил п. 13.12 ПДД.',
      direction: 'angular-motion'
    },
    {
      number: '3-2',
      title: 'А двигался на разрешающий сигнал светофора, В двигался на запрещающий сигнал светофора или регулировщика. Таким образом, В нарушил п. 6.13 ПДД.',
      direction: 'angular-motion'
    },
    {
      number: '3-3',
      title: 'В выезжал на дорогу, не используя полосу разгона. А двигался по этой дороге прямо. Таким образом, В нарушил п. 8.10 ПДД.',
      direction: 'angular-motion'
    },
    {
      number: '3-4',
      title: 'А поворачивал направо, находясь слева от В. При этом В поворачивал налево. Таким образом, А и В нарушили п. 8.5',
      direction: 'angular-motion'
    },
    {
      number: '3-5',
      title: 'В двигался прямо по полосе встречного движения и совершил столкновение с А, поворачивающим налево. Таким образом, В нарушил п. 9.2 ПДД, А нарушил п. 8.1 ПДД.',
      direction: 'angular-motion'
    },
    {
      number: '3-6',
      title: 'А двигался по полосе, предназначенной для маршрутных транспортных средств и обозначенной знаками 5.11, 5.13.1, 5.13.2, 5.14. В при въезде на дорогу совершал поворот налево. Таким образом,В нарушил п. 13.9 ПДД.',
      direction: 'angular-motion'
    },
    {
      number: '3-7',
      title: 'А двигался направо в направлении стрелки, включенной в дополнительной секции одновременно с красным сигналом светофора, не уступив дорогу В, двигавшемуся на зеленый сигнал светофора с другого направления. Таким образом, А нарушил п. 13.5 ПДД.',
      direction: 'angular-motion'
    },
    {
      number: '3-8',
      title: 'А двигался на разрешающий сигнал светофора или регулировщика и не уступил дорогу В, завершающему движение через перекресток. Таким образом, А нарушил п. 13.8 ПДД.',
      direction: 'angular-motion'
    },
    {
      number: '3-9',
      title: 'На перекрестке неравнозначных дорог А не уступил дорогу В, двигавшемуся по главной дороге. Таким образом, А нарушил п. 13.9 ПДД.',
      direction: 'angular-motion'
    },
    {
      number: '3-10',
      title: 'На перекрестке равнозначных дорог В не уступил дорогу А, приближающемуся справа. Таким образом, В нарушил п. 13.11 ПДД.',
      direction: 'angular-motion'
    },
    {
      number: '4-1',
      title: 'В двигался задним ходом. А стоял либо двигался навстречу В. Таким образом, В нарушил п. 8.12.',
      direction: 'backing'
    },
    {
      number: '4-2',
      title: 'В выезжал с околотротуарной стоянки задним ходом. А двигался по дороге. Таким образом, В нарушил п. 8.12 ПДД.',
      direction: 'backing'
    },
    {
      number: '4-3',
      title: 'В выезжал с околотротуарной стоянки задним ходом. А в это время двигался по дороге задним ходом. Таким образом, А и В нарушили п. 8.12 ПДД.',
      direction: 'backing'
    },
    {
      number: '4-4',
      title: 'В двигался задним ходом на автомагистрали или дороге, обозначенной знаком 5.3. А двигался по своей полосе. Таким образом, В нарушил п.16.1 ПДД.',
      direction: 'backing'
    },
    {
      number: '5-1',
      title: ' А припарковано в соответствии с требованиями ПДД. Водитель В, выезжая с места стоянки (остановки) произвел столкновение с А. Таким образом, В нарушил п. 8.1 ПДД.',
      direction: 'hitting-standing-vehicle'
    },
    {
      number: '5-2',
      title: ' В совершал маневрирование для остановки (стоянки), допустил столкновение с А, припаркованным в соответствии с требованиями ПДД. Таким образом, В нарушил п. 8.1 ПДД.',
      direction: 'hitting-standing-vehicle'
    },
    {
      number: '5-3',
      title: ' В совершал маневрирование для остановки (стоянки), допустил столкновение с А, припаркованным с нарушением требований ПДД. Таким образом, В нарушил п. 8.1 ПДД.',
      direction: 'hitting-standing-vehicle'
    },
    {
      number: '5-4',
      title: ' А на участке дороги с достаточной видимостью остановился на проезжей части при наличии обочины. В, не обеспечив безопасность движения, произвел столкновение. Таким образом, В нарушил 10.1 ПДД.',
      direction: 'hitting-standing-vehicle'
    },
    {
      number: '5-5',
      title: ' А стоял во втором ряду. В, не обеспечив безопасность движения, произвел столкновение. Таким образом, В нарушил п. 10.1 ПДД.',
      direction: 'hitting-standing-vehicle'
    },
    {
      number: '5-6',
      title: ' В остановился (стоял) на автомагистрали или дороге, обозначенной знаком 5.3 вне специальной площадки для стоянки. А двигался по своей полосе. Таким образом, А нарушил 10.1 ПДД.',
      direction: 'hitting-standing-vehicle'
    },
    {
      number: '5-7',
      title: ' В не принял необходимых мер, исключающих самопроизвольное движение транспортного средства, в результате чего указанное транспортное средство столкнулось с транспортным средством А. Таким образом, В нарушил п. 12.8 ПДД.',
      direction: 'hitting-standing-vehicle'
    },
    {
      number: '5-8',
      title: ' А, остановился и открыл дверь, не обеспечив безопасность движения, в результате чего В произвел столкновение. Таким образом, А нарушил п. 12.7 ПДД. (Внимание: схема не распространяется на аналогичные действия пассажиров ТС А.)',
      direction: 'hitting-standing-vehicle'
    }
  ];

  return {
    directions: Object.freeze(directions),
    schemes: Object.freeze(schemes),
    selectedScheme: null
  };
}
