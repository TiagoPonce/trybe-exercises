let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

  let info2 = {
      personagem: 'Tio Patinhas',
      origem: 'Christmas on Bear Mountain Dells Four Color Comics #178',
      nota: 'O último MacPatinhas',
      recorrente: 'Sim'
  };


  for (let key in info) {
      for (let key2 in info2)
        console.log(info[key] + ' ' + info2[key2]);
  }