import SQLite from 'react-native-sqlite-storage';


const getGroups = () => new Promise((resolve, reject)=>{
    const db = SQLite.openDatabase(
      {
        name: 'mat.db',
        location: 'Library',
        createFromLocation: 1,
      },
      () => {
        console.log('open success');
      },
      (error) => {
        console.log('open fail', error);
      },
    );

    const sql = 'select * from cardGroup'

    let data = new Array()
    db.transaction(
      (tx) => {
        tx.executeSql(sql, [], (tx, result) => {
          console.log('#transaction success : selectGroup# ', result.rows);
          for (let i = 0; i < result.rows.length; i++) {
            const item = result.rows.item(i);
            // temp.push(JSON.parse(item));
            // temp.push(result.rows.item(i))
            // console.log(item)
            data.push(item)
          }
          resolve(data)
        });
      },
      (err) => {console.log(err);reject(err)}
    );
})


const moveGroups = (checkList:any, selectedGroupId:number) => new Promise((resolve, reject) => {
    const db = SQLite.openDatabase(
        {
          name: 'mat.db',
          location: 'Library',
          createFromLocation: 1,
        },
        () => {
          console.log('open success');
        },
        (error) => {
          console.log('open fail', error);
        },
      );

    //   let groupIdList = new Array()
    // //   let sql = `select groupId from cards where id in (${checkList})`
    //     // console.log('#######  ', sql)
    //   db.transaction(
    //     (tx) => {
    //         tx.executeSql(`select groupId from cards where id in (${checkList})`, [], (tx, result) => {
    //           console.log(`#transaction : select groupId# `, result);
    //           for (let i = 0; i < result.rows.length; i++) {
    //             const item = result.rows.item(i);
    //             console.log('## item ##', item)
    //             groupIdList.push(item.groupId)
    //           }
    //         })
    //     }
    // )


      // cardGroup의 cnt 변경
      db.transaction(
        (tx) => {
          tx.executeSql(`update cardGroup set cnt = cnt + ${checkList.length} where id = ${selectedGroupId}`, [], (tx, result) => {
            // console.log('#transaction : update cnt 2# ', result.rows);
          });
        },
        (err) => {console.log(err);reject(err)}
      );
      // cards의 groupId 변경
    //   sql = `update cards set groupId = ${selectedGroupId} where id in (${checkList})`;
      db.transaction(
        (tx) => {
          tx.executeSql(`update cards set groupId = ${selectedGroupId} where id in (${checkList})`, [], (tx, result) => {
            // console.log('#transaction : update groupId of cards# ', result.rows);
          });
        },
        (err) => {console.log(err);reject(err)}
      );

        resolve(true)
})

const updateGroupCnt = (groupId:any) => new Promise((resolve, reject) => {
    const db = SQLite.openDatabase(
        {
          name: 'mat.db',
          location: 'Library',
          createFromLocation: 1,
        },
        () => {
          console.log('open success');
        },
        (error) => {
          console.log('open fail', error);
        },
      );

      db.transaction(
        (tx) => {
            tx.executeSql(`update cardGroup set cnt = cnt-1 where id = ${groupId}`, [], (tx, result) => {
                console.log('#transaction : update cnt 1# ', result);
                resolve(true)
              })
          },
          (err) => {reject(err)}
      )
}) 

const getGroupIdsByCardId = (idList:any) => new Promise((resolve, reject) => {
    const db = SQLite.openDatabase(
        {
          name: 'mat.db',
          location: 'Library',
          createFromLocation: 1,
        },
        () => {
          console.log('open success');
        },
        (error) => {
          console.log('open fail', error);
        },
      );

      let data = new Array()
      db.transaction(
        (tx) => {
            tx.executeSql(`select groupId from cards where id in (${idList})`, [], (tx, result) => {
                console.log('#transaction : update cnt 1# ', result);
                for (let i = 0; i < result.rows.length; i++) {
                    const item = result.rows.item(i);
                    data.push(item.groupId)
                  }
                resolve(data)
            })
          },
          (err) => {reject(err)}
      )
})

const updateGroupName = (groupId:number, newName:string) => new Promise((resolve, reject) => {
  const db = SQLite.openDatabase(
      {
        name: 'mat.db',
        location: 'Library',
        createFromLocation: 1,
      },
      () => {
        console.log('open success');
      },
      (error) => {
        console.log('open fail', error);
      },
    );

    // let data = new Array()
    db.transaction(
      (tx) => {
          tx.executeSql(`update cardGroup set groupName = '${newName}' where id = ${groupId}`, [], (tx, result) => {
              console.log('#transaction : UPDATE groupName# ', result);
              for (let i = 0; i < result.rows.length; i++) {
                  const item = result.rows.item(i);
                  // data.push(item.groupId)
                }
              resolve(true)
          })
        },
        (err) => {reject(err)}
    )
})

const deleteGroupAndCards = (deleteGroupId:number) => new Promise((resolve, reject)=>{
  const db = SQLite.openDatabase(
    {
      name: 'mat.db',
      location: 'Library',
      createFromLocation: 1,
    },
    () => {
      console.log('open success');
    },
    (error) => {
      console.log('open fail', error);
    },
  );


  db.transaction(
    (tx) => {
      tx.executeSql(`delete from cards where groupId = ${deleteGroupId}`, [], (tx, result) => {
        console.log('#transactio : DELETE CardsOfGroup# ', result);
      });
    },
    (err) => {console.log(err);reject(err)}
  );

  db.transaction(
    (tx) => {
      tx.executeSql(`delete from cardGroup where id = ${deleteGroupId}`, [], (tx, result) => {
        console.log('#transactio : DELETE Group# ', result);
      });
    },
    (err) => {console.log(err);reject(err)}
  );

  resolve(true)
})

const deleteOnlyGroup = (deleteGroupId:number, cntForDelete:number) => new Promise((resolve, reject)=>{
  const db = SQLite.openDatabase(
    {
      name: 'mat.db',
      location: 'Library',
      createFromLocation: 1,
    },
    () => {
      console.log('open success');
    },
    (error) => {
      console.log('open fail', error);
    },
  );


  db.transaction(
    (tx) => {
      tx.executeSql(`update cards set groupId=1 where groupId = ${deleteGroupId}`, [], (tx, result) => {
        console.log('#transactio : DELETE CardsOfGroup# ', result);
      });
    },
    (err) => {console.log(err);reject(err)}
  );

  db.transaction(
    (tx) => {
      tx.executeSql(`delete from cardGroup where id = ${deleteGroupId}`, [], (tx, result) => {
        console.log('#transactio : DELETE Group# ', result);
      });
    },
    (err) => {console.log(err);reject(err)}
  );

  db.transaction(
    (tx) => {
      tx.executeSql(`update cardGroup set cnt = cnt+${cntForDelete} where id = 1`, [], (tx, result) => {
        console.log('#transactio : DELETE Group# ', result);
      });
    },
    (err) => {console.log(err);reject(err)}
  );

  resolve(true)
})

const getCountByGroupId = (groupId:number) => new Promise((resolve, reject)=>{
  const db = SQLite.openDatabase(
    {
      name: 'mat.db',
      location: 'Library',
      createFromLocation: 1,
    },
    () => {
      console.log('open success');
    },
    (error) => {
      console.log('open fail', error);
    },
  );


  db.transaction(
    (tx) => {
      tx.executeSql(`select count(id) from cards where groupId = ${groupId}`, [], (tx, result) => {
        console.log('#transactio : DELETE CardsOfGroup# ', result);
        resolve(result.rows.length)
      });
    },
    (err) => {console.log(err);reject(err)}
  );

})

const updateCardValue = (cardData:any) => new Promise((resolve, reject)=>{
  const db = SQLite.openDatabase(
    {
      name: 'mat.db',
      location: 'Library',
      createFromLocation: 1,
    },
    () => {
      console.log('open success');
    },
    (error) => {
      console.log('open fail', error);
    },
  );
const {id, fullData, name, position, team, company, memo} = cardData
const sql = `update cards set name='${name}', position='${position}', team='${team}', company='${company}', memo='${memo}', fullData='${fullData}' where id = ${id}`


  db.transaction(
    (tx) => {
      tx.executeSql(sql, [], (tx, result) => {
        console.log('#transactio : UPDATE cardValue# ', result);
        resolve(result.rows.length)
      });
    },
    (err) => {console.log(err);reject(err)}
  );

  resolve(true)

})

const deleteCardById = (id:number, groupId:number) => new Promise((resolve, reject)=>{
  console.log('## db.deleeCardById ##', id, groupId)
  const db = SQLite.openDatabase(
    {
      name: 'mat.db',
      location: 'Library',
      createFromLocation: 1,
    },
    () => {
      console.log('open success');
    },
    (error) => {
      console.log('open fail', error);
    },
  );

  db.transaction(
    (tx) => {
      tx.executeSql(`delete from cards where id = ${id}`, [], (tx, result) => {
        console.log('#transactio : DELETE card# ', result);
      });
    },
    (err) => {console.log(err);reject(err)}
  );

  db.transaction(
    (tx) => {
      console.log('### groupId ###', groupId)
      tx.executeSql(`update cardGroup set cnt=cnt-1 where id = ${groupId}`, [], (tx, result) => {
        console.log('#transactio : DELETE card# ', result);
      });
    },
    (err) => {console.log(err);reject(err)}
  );

  resolve(true)
})

const getGroupIdByCardId = (id:number) => new Promise((resolve, reject)=>{
  const db = SQLite.openDatabase(
    {
      name: 'mat.db',
      location: 'Library',
      createFromLocation: 1,
    },
    () => {
      console.log('open success');
    },
    (error) => {
      console.log('open fail', error);
    },
  );

  db.transaction(
    (tx) => {
      tx.executeSql(`select groupId from cards where id = ${id}`, [], (tx, result) => {
        console.log('#transactio : SELECT groupId by CardId# ', result.rows.item(0));
        resolve(result.rows.item(0).groupId)
      });
    },
    (err) => {console.log(err);reject(err)}
  );
})


export default {getGroups, moveGroups, updateGroupCnt, getGroupIdByCardId, getGroupIdsByCardId, updateGroupName, deleteGroupAndCards, deleteOnlyGroup, getCountByGroupId, updateCardValue, deleteCardById}