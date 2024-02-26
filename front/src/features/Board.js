function boardPost() {
    //카테고리 번호는 1번부터 4번까지 있음 이중에 선택하여야함
    fetch('http://15.164.231.77:3000/board', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
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