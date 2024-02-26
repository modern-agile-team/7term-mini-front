function boardPost() {
    //카테고리 번호는 1번부터 4번까지 있음 이중에 선택하여야함
    fetch('http://15.164.231.77:3000/boards/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXIxX2lkIiwibm8iOjYsImlhdCI6MTcwODM5NzQwOCwiZXhwIjoxNzEwOTg5NDA4fQ.TPIWT9kJBhzWDU7SQLULKUnOb-8ddTRy7MBbhCalm0U`
        },
        body: JSON.stringify({
            //아래는 예시 형태임
            "categoryNo" : 1,
            "content" : "내용내용"
        }),
      })
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
        .catch(err => {
          console.log(err);
          alert('에러');
        });
}

function boardDelete(){

    const no = 17;
    // 삭제할 게시글 번호를 받아서 끝에 넣는다. 자신의 글만 삭제할수 있음으로 주의하자
    fetch(`http://15.164.231.77:3000/boards/${no}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXIxX2lkIiwibm8iOjYsImlhdCI6MTcwODM5NzQwOCwiZXhwIjoxNzEwOTg5NDA4fQ.TPIWT9kJBhzWDU7SQLULKUnOb-8ddTRy7MBbhCalm0U`
        },
      })
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
        .catch(err => {
          console.log(err);
          alert('에러');
        });
}

function boardUpdate() {
    //자신의 글만 수정가능
    const no = 16;
    fetch(`http://15.164.231.77:3000/boards/${no}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXIxX2lkIiwibm8iOjYsImlhdCI6MTcwODM5NzQwOCwiZXhwIjoxNzEwOTg5NDA4fQ.TPIWT9kJBhzWDU7SQLULKUnOb-8ddTRy7MBbhCalm0U`
        },
        body: JSON.stringify({
            //아래는 예시 형태임
            "categoryNo" : 2,
            "content" : "내용내용2123"
        }),
      })
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
        .catch(err => {
          console.log(err);
          alert('에러');
        });
}

function boardRead(){
    const no = 25;
     fetch(`http://15.164.231.77:3000/boards/${no}`, {
     method: 'GET',
    headers: {
        'content-type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXIxX2lkIiwibm8iOjYsImlhdCI6MTcwODM5NzQwOCwiZXhwIjoxNzEwOTg5NDA4fQ.TPIWT9kJBhzWDU7SQLULKUnOb-8ddTRy7MBbhCalm0U`
    },

  })
    .then(response => response.json())
    .then(result => {
        console.log(result)
    })
    .catch(err => {
      console.log(err);
      alert('에러');
    });} 

boardRead();