// import styles from "./page.css"; // Make sure this import path is correct
import "./page.css";
// import ProgressBar from "../progressBar/progressBar";
import MultiStep from "../progressBar/progressBar";


export default function Procedures() {
    return (
      <div className="dashboard-container">
        {/* Header Container */}
        <div className="header-container"> 
            <h1>Progress</h1>
            <MultiStep />
        </div>
        
        {/* Body Content */}
        <div className="body-container">
            <h2>C-Section Steps</h2>
            <h3>1. Preoperative Preparations</h3>
            <p>
                First, the patient is informed of the procedure, risks, benefits, and written consent is obtained. At this point as you are reading this, this step has been completed. <br/>Anesthesia: The anesthesia team administers regional anesthesia, usually a spinal block or epidural, to numb the lower part of the body. General anesthesia is rarely used but may be necessary in some emergency situations. <br />Monitoring: The patient's vital signs are monitored, including blood pressure, heart rate, and oxygen levels. The fetal heart rate is also monitored throughout the procedure. <br />Catheterization: A urinary catheter is placed to keep the bladder empty during surgery. <br />IV Line: An intravenous line is started to provide fluids and medications. 
            </p>
            <h3>2. Surgery Prep</h3>
            <p>
                Antiseptic Cleaning: The abdomen is cleaned with an antiseptic solution to reduce the risk of infection. <br /> Draping: Sterile drapes are placed to create a sterile field, leaving only the incision site exposed. <br />
            </p>
            <h3>3. Incision</h3>
            <p>
                Abdominal Incision: A horizontal skin incision, called a "bikini cut," is typically made just above the pubic hairline. In some cases, a vertical incision may be used. <br />Uterine Incision: Once the abdominal wall is opened, the surgeon makes an incision in the uterus, usually a transverse cut in the lower uterine segment, known as a low transverse incision. <br />
            </p>
            <h3>4. Delivery of the Baby</h3>
            <p>
                The surgeon carefully opens the uterus and the amniotic sac if it has not already ruptured. - The baby's head or buttocks (depending on the baby's position) is gently lifted through the incision. - The baby's mouth and nose are suctioned to remove any fluids, then the entire body is delivered. - The umbilical cord is clamped and cut. <br />
            </p>
            <h3>5. After Delivery</h3>
            <p>
                The baby is handed to the nursing staff or pediatric team for evaluation, cleaning, and initial care. - If there are no complications, the baby can often be placed skin-to-skin with the mother.<br />
            </p>
            <h3>6. Placenta Removal</h3>
            <p>
                The placenta is delivered through the incision, sometimes with gentle pulling or uterine massage. <br />
            </p>
            <h3>7. Closure</h3>
            <p>
                The uterine incision is closed with sutures. - The abdominal layers, including the fascia and skin, are carefully stitched or stapled together. - All instruments and sponges are counted to ensure nothing is left inside the patient.<br />
            </p>
            <h3>8. Incision</h3>
            <p>
                The patient is moved to a recovery area where she is closely monitored for a few hours. - Pain management, often with medications like acetaminophen and ibuprofen or opioids, is provided as needed. - The urinary catheter is typically removed after a day. - The patient is usually encouraged to start moving around as soon as possible to reduce the risk of blood clots. Recovery from a C-section generally takes longer than from a vaginal birth, with most women staying in the hospital for around 3-4 days and requiring several weeks at home to fully recover.<br />
            </p>
        </div>
      </div>
    );
}
