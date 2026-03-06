// Use For Test
/*
const reviews = [
  "Text 1",
  "Text 2",
  "Text 3",
  "Text 4",
  `<p>หนูขอขอบคุณคลินิกทานตะวันมากๆนะคะ</p> 
<p>ถ้าหนูไม่มีคลินิกทานตะวันชีวิตหนูคงไม่ได้พบแสงสว่างแบบนี้หรอกค่ะที่ช่วยหนูยุติการครรค์ให้หนูไปเริ่มต้นชีวิตใหม่
ในใจหนูในวันที่หนูตรวจครรภ์ก็ขึ้น 2 ขีดขั้นแรกหนูไม่กล้าบอกใครเลยนอกจากแฟนหนู</p>
<p>แฟนหนูก็ไม่อยากไปทำร้ายใคร เขาก็เหนื่อย
ชีวิตหนูมืดมนคือตันไปหมดไม่รู้จะทำยังไง</p>
<p>ไม่ใช่ว่าหนูอยากทำร้ายเด็กในครรภ์ แต่เราไม่มีเงินที่จะดูแลเขา เพราะอีกอย่างหนึ่งลูกสาวหนูปีหน้าเขาก็ต้องเข้ามหาลัยหนูก็เลยไม่พร้อม หนูเลยต้องยุติในการมีลูก เพราะเหตุผลนี้ทำให้เรามีชีวิตมืดลงตามไปหมด
แล้ววันหนึ่งหนูก็ได้เจอในเฟซเจอคลินิกทานตะวันแล้วใจหนึ่งหนูก็คิดว่าเขาจะช่วยเราได้ไหม เราจะบาปไหม แต่ทุกครั้งที่หนูคิดนอนคิดมากเลยตัดสินใจเข้ามาคลินิกทานตะวันจนถึงวันที่เอาตัวอ่อนออกจากครรภ์วิตกกังวลและคิดมาตลอดว่าจะสำเร็จไหม
จนได้ตรวจครรภ์อีกรอบขึ้นมา 1 ขีดเลยรู้สึกว่าสบายใจคือเราได้ทำสำเร็จและได้ยุติการครรภ์ แล้วทำให้ชีวิตได้จุดเริ่มต้นใหม่ชีวิตใหม่เหมือนมีแสงสว่างมาโปรด</p>
<p>หนูขอขอบคุณทีมงานและคณะแพทย์หมอพยาบาลและทีมงานคลินิกทานตะวันที่ให้ปรึกษาตลอดเวลาที่ หนูใช้ยาจนสิ้นสุดการครรภ์จนสำเร็จ
ตอนนี้หนูก็ทำงานได้ปกติแล้วหนูขอให้คลินิกทานตะวันอยู่กับพวกเราตลอดไปนะขอบคุณมากๆนะคะที่เป็นแสงสว่างให้อีกครั้ง</p>`
];
*/

document.addEventListener("DOMContentLoaded", () => {

  const url = "https://opensheet.elk.sh/1dDYMItlUhtZLbIqTlbvU3Yk28qncY0mNm1qOQmIuY6Y/Review";


  const openBtn = document.getElementById("openBtn");
  const reviewText = document.getElementById("reviewText");
  const remarkText = document.getElementById("remarkText");
  const reviewHeader = document.getElementById("reviewHeader");
  const reviewImg = document.getElementById("reviewImg");

  function getRandomReview(reviews) {
      const randomIndex = Math.floor(Math.random() * reviews.length);
      return reviews[randomIndex];
  }
  async function loadReviews() {

    const res = await fetch(url);
    const data = await res.json();

    const review = getRandomReview(data);

    const paragraphs = review.review
      .split(/\n/)
      .map(p => `<p>${p}</p>`)
      .join("");

      reviewText.innerHTML = paragraphs;

    }



  openBtn.addEventListener("click", () => {
      const isOpen = reviewImg.classList.toggle("open");

    if (isOpen) {
      // OPEN state
      //const review = getRandomReview();
      //reviewText.innerHTML = review;

      loadReviews();

      openBtn.textContent = "เปิดรีวิวอีกครั้ง"

      reviewText.classList.remove("hidden");
      reviewHeader.classList.add("hidden");
      remarkText.classList.remove("hidden");
      reviewImg.classList.add("hidden");

    } else {
      // CLOSE state
      document.body.scrollIntoView({ behavior: 'smooth' });
      openBtn.textContent = "เปิดรีวิว"

      reviewText.classList.add("hidden");
      reviewHeader.classList.remove("hidden");
      remarkText.classList.add("hidden");
      reviewImg.classList.remove("hidden");
    }
    
  });
});