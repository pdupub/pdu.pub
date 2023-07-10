---
layout: fb
title: Quantums
---


<script type="module">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
    import { getFirestore, collection, query, where, getDocs, orderBy, limit, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCxn4bSSzUO7kXbC0iHF-EXebRUgVPg1yk",
        authDomain: "pdu-dev-1.firebaseapp.com",
        projectId: "pdu-dev-1",
        storageBucket: "pdu-dev-1.appspot.com",
        messagingSenderId: "997806828618",
        appId: "1:997806828618:web:6960b9eb5ff7ef14c18ab3"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    signInAnonymously(auth)
    .then(() => {
        // Signed in..
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
    });

    async function getUser(addressHex)  {
        const ref = doc(db, "individual", addressHex);
        const docSnapshot = await getDoc(ref);
        if (docSnapshot.exists()) {
            return docSnapshot.data();
        }
        return null;
    }

    async function fetchData() {       
        const q = query(collection(db, "quantum"), where("type", "==", 0), orderBy("seq", "desc"), limit(10))
        const querySnapshot = await getDocs(q);
        var messagesContainer = document.getElementById('messages');
        messagesContainer.innerHTML = '';

        querySnapshot.forEach(async (doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
            const rcs = doc.data().rcs;
            var qText = ""
            var qImgUrl = ""
            var likeCnt = Math.round(Math.random() * (50 - 10)) + 10;
            var viewCnt = Math.round(Math.random() * (500 - 200)) + 200;

            const user = await getUser(doc.data().address);
            const nickname = user.rp.nickname["data"] || "";
            const selfIntro = user.rp.selfIntro["data"] || "";
            const avatarURL = user.rp.avatarURL["data"] || "";

            for (var i=0; i<rcs.length; i++) {
                var qc = rcs[i];
                if (qc.fmt === 1) {
                    qText = qText + qc.data;
                } else if (qc.fmt === 2) {
                    qImgUrl = qc.data;
                }
            }
 
            if (qImgUrl === "") { 
                //
            } else {
                var messageElement = document.createElement('div');
                messageElement.classList.add('col-sm-6');
                messageElement.classList.add('col-lg-4');

                messageElement.innerHTML =`
              <div class="card card-sm">
                <a href="#" class="d-block"><img src="${qImgUrl}" class="card-img-top"></a>
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <span class="avatar me-3 rounded" style="background-image: url(${avatarURL})"></span>
                    <div>
                      <div>${nickname}</div>
                      <div class="text-muted">${qText}</div>
                    </div>
                    <div class="ms-auto">
                      <a href="#" class="text-muted">
                        <!-- Download SVG icon from http://tabler-icons.io/i/eye -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path></svg>
                        ${viewCnt}
                      </a>
                      <a href="#" class="ms-3 text-muted">
                          <!-- Download SVG icon from http://tabler-icons.io/i/heart -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-filled text-red" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path></svg>
                          ${likeCnt}
                        </a>
                    </div>
                  </div>
                </div>
              </div>`

                messagesContainer.appendChild(messageElement);
            }
        });
    }
    fetchData();

    

</script>


<div class="container-xl">
    <div class="row row-cards" id="messages">
<!-- 这里将显示从Firebase数据库中获取的消息 -->
</div>
</div>


