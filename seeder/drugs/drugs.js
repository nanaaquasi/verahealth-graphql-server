const Drug = require('../../model/Drug');
const mongoose = require('mongoose');

console.log(Drug);

mongoose.connect('mongodb://localhost:27017/mediHealth', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let drugs = [
  new Drug({
    NDC_Code: '',
    name: 'Paracetamol (acetaminophen)',
    overview:
      'Paracetamol is a pain reliever and a fever reducer. It is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers. It relieves pain in mild arthritis but has no effect on the underlying inflammation and swelling of the joint.',
    drugInfo: {
      importantInfo:
        'Before using paracetamol , tell your doctor if you have liver disease or a history of alcoholism. Do not use any other over-the-counter cough, cold, allergy, or pain medication without first asking your doctor or pharmacist.',
      caution: [
        'Read the label of any other medicine you are using to see if it contains paracetamol, acetaminophen or APAP.',
        ,
        ' Alcohol may increase your risk of liver damage while taking paracetamol.'
      ],
      furtherInfo:
        'Remember, keep this and all other medicines out of the reach of children, never share your medicines with others, and use this medication only for the indication prescribed.',
      interactionsInfo: [
        'There may be other drugs that can interact with paracetamol . Tell your doctor about all your prescription and over-the-counter medications, vitamins, minerals, herbal products, and drugs prescribed by other doctors. Do not start a new medication without telling your doctor.'
      ],
      avoidance: "'Avoid drinking alcohol while taking this medication'",
      sideEffects: {
        info:
          'Get emergency medical help if you have any of these signs of an allergic reaction to paracetamol: hives; difficulty breathing; swelling of your face, lips, tongue, or throat',
        effects: [
          'low fever with nausea',
          'stomach pain',
          'jaundice (yellowing of the skin or eyes)',
          'clay-colored stools',
          'dark urine'
        ]
      }
    },
    imageUrl: [
      'https://i.dailymail.co.uk/i/pix/2014/10/29/1414545403236_wps_62_A_stock_photo_of_paraceta.jpg',
      'https://3.imimg.com/data3/LC/VT/MY-964039/paracetamol-tablet-500mg-500x500.jpg'
    ],
    url: 'https://www.drugs.com/paracetamol.html',
    dosage: {
      info:
        'Paracetamol 500mg tablets: Two 500 mg tablets orally every 4 to 6 hour',
      overdoseInfo:
        'Talk to your doctor before taking paracetamol and never use more than 2 grams (2000 mg) per day. Seek emergency medical attention if you think you have used too much of this medicine.',
      howTo: [
        'Follow the directions on the medicine label. The paracetamol chewable tablet must be chewed thoroughly before you swallow it. Make sure your hands are dry when handling the paracetamol disintegrating tablet',
        'Place the tablet on your tongue. It will begin to dissolve right away. Do not swallow the tablet whole. Allow it to dissolve in your mouth without chewing'
      ],
      dosageMiss:
        'Since paracetamol is often used only when needed, you may not be on a dosing schedule. If you are using the medication regularly, use the missed dose as soon as you remember. If it is almost time for your next regularly scheduled dose, skip the missed dose and use your next dose as directed.'
    }
  }),
  new Drug({
    NDC_Code: '',
    name: 'Lisinopril',
    overview:
      'Lisinopril is an ACE inhibitor used to treat high blood pressure (hypertension) in adults and children who are at least 6 years old.',
    drugInfo: {
      importantInfo: `Do not use lisinopril if you are pregnant. It could harm the unborn baby. Stop using this medicine and tell your doctor right away if you become pregnant.
      You should not use this medicine if you have ever had angioedema. Do not take lisinopril within 36 hours before or after taking medicine that contains sacubitril (such as Entresto).`,
      caution: [
        `You should not use lisinopril if you are allergic to it, or if you:
      have a history of angioedema,recently took a heart medicine called sacubitril; or are allergic to any other ACE inhibitor, such as benazepril, captopril, enalapril.`,
        `Do not use potassium supplements or salt substitutes while taking this medicine, unless your doctor has told you to`
      ],
      furtherInfo: `Remember, keep this and all other medicines out of the reach of children, never share your medicines with others, and use this medication only for the indication prescribed.`,
      interactionsInfo: [
        `insulin or oral diabetes medicine`,
        'a potassium supplement',
        'a diuretic or "water pill"',
        'gold injections to treat arthritis'
      ],
      avoidance: `Avoid getting up too fast from a sitting or lying position, or you may feel dizzy. Get up slowly and steady yourself to prevent a fall`,
      sideEffects: {
        info: `Get emergency medical help if you have signs of an allergic reaction to lisinopril: hives; severe stomach pain, difficult breathing; swelling of your face, lips, tongue, or throat. You may be more likely to have an allergic reaction if you are African-American.`,
        effects: [
          'a light-headed feeling, like you might pass out',
          'high potassium - nausea, weakness, tingly feeling, chest pain, irregular heartbeats, loss of movement',
          'kidney problems - little or no urination, swelling in your feet or ankles, feeling tired or short of breath',
          'liver problems - nausea, upper stomach pain, itching, tired feeling, loss of appetite, dark urine, clay-colored stools, jaundice (yellowing of the skin or eyes)',
          'headache, dizziness, cough or chest pain'
        ]
      }
    },
    imageUrl: [
      'https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/SDZ06100.jpg',
      'https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/LUP05160.jpg'
    ],
    url: 'https://www.drugs.com/lisinopril.html',
    dosage: {
      info:
        'Take lisinopril exactly as prescribed by your doctor. Follow all directions on your prescription label.The dosage is based on your medical condition and response to treatment. For children, the dosage is also based on weight. Your doctor may occasionally change your dose to make sure you get the best results.',
      overdoseInfo: `Seek emergency medical attention or call the Poison Help line at 1-800-222-1222`,
      howTo: [
        `Measure liquid medicine with the dosing syringe provided, or with a special dose-measuring spoon or medicine cup. If you do not have a dose-measuring device, ask your pharmacist for one`,
        `Drink plenty of water each day while you are taking this medicince. Lisinopril can be taken with or without food`,
        'To help you remember, take it at the same time each day.',
        'Store at room temperature away from moisture and heat. Do not freeze the oral liquid'
      ],
      dosageMiss: `Take the missed dose as soon as you remember. Skip the missed dose if it is almost time for your next scheduled dose. Do not take extra medicine to make up the missed dose`
    }
  }),
  new Drug({
    NDC_Code: '',
    name: 'Ciprofloxacin',
    overview:
      'Ciprofloxacin is anantibiotic that fights bacteria in the body. It is used to treat different types of bacterial infections, including skin infections, bone and joint infections, respiratory or sinus infections, urinary tract infections, and certain types of diarrhea. It is also used to treat gonorrhea',
    drugInfo: {
      importantInfo: `Stop using this medicine and call your doctor at once if you have symptoms such as: headache, hunger, irritability, numbness, tingling, burning pain, confusion, agitation, paranoia, problems with memory or concentration, thoughts of suicide, or sudden pain or movement problems in any of your joints.`,
      caution: [
        `You may not be able to use ciprofloxacin if you have a muscle disorder. Tell your doctor if you have a history of myasthenia gravis.
       `,
        `Avoid getting up too fast from a sitting or lying position, or you may feel dizzy. Get up slowly and steady yourself to prevent a fall`,
        `Do not use potassium supplements or salt substitutes while taking this medicine, unless your doctor has told you to`
      ],
      furtherInfo: `Remember, keep this and all other medicines out of the reach of children, never share your medicines with others, and use this medication only for the indication prescribed.`,
      interactionsInfo: [
        `tizanidine`,
        'theophylline',
        'a diuretic or "water pill"',
        'cyclosporine, methotrexate, metoclopramide, phenytoin, probenecid, ropinirole, sildenafil, or theophylline'
      ],
      avoidance: `Do not take ciprofloxacin with dairy products such as milk or yogurt, or with calcium- fortified juice. You may eat or drink these products with your meals, but do not use them alone when taking ciprofloxacin
      
      Using caffeine while taking ciprofloxacin can increase the effects of the caffeine`,
      sideEffects: {
        info: `Get emergency medical help if you have signs of an allergic reaction to ciprofloxacin (hives, difficult breathing, swelling in your face or throat) or a severe skin reaction.`,
        effects: [
          'severe stomach pain, diarrhea that is watery or bloody',
          'ast or pounding heartbeats, fluttering in your chest, shortness of breath, and sudden dizziness (like you might pass out)',
          'vaginal itching or discharge',
          'abnormal liver function tests.',
          'nausea, vomiting, diarrhea, stomach pain'
        ]
      }
    },
    imageUrl: [
      'https://www.drugs.com/images/pills/fio/DRR01270.JPG',
      'https://www.drugs.com/images/pills/mtm/Ciprofloxacin%20750%20mg-TEV.jpg'
    ],
    url: 'https://www.drugs.com/ciprofloxacin.html',
    dosage: {
      info:
        'Take lisinopril exactly as prescribed by your doctor. Follow all directions on your prescription label.You may take ciprofloxacin with or without food, at the same time each day',
      overdoseInfo: `Seek emergency medical attention or call the Poison Help line at 1-800-222-1222`,
      howTo: [
        `Shake the oral suspension (liquid) for 15 seconds before you measure a dose. Use the dosing syringe provided, or use a medicine dose-measuring device (not a kitchen spoon). Do not give ciprofloxacin oral suspension through a feeding tube`,
        `Swallow the extended-release tablet whole and do not crush, chew, or break it`,
        'Use ciprofloxacin for the full prescribed length of time, even if your symptoms quickly improve. Skipping doses can increase your risk of infection that is resistant to medication. This medicine will not treat a viral infection such as the flu or a common cold.',
        'Store at room temperature away from moisture and heat. Do not allow the liquid medicine to freeze. Throw away any unused liquid after 14 days.'
      ],
      dosageMiss: `Take the missed dose as soon as you remember. Skip the missed dose if it is almost time for your next scheduled dose. Do not take two doses at one time.`
    }
  }),
  new Drug({
    NDC_Code: '',
    name: 'Amoxicillin',
    overview:
      'Amoxicillin is a penicillin antibiotic that fights bacteria.Amoxicillin is used to treat many different types of infection caused by bacteria, such as tonsillitis, bronchitis, pneumonia, and infections of the ear, nose, throat, skin, or urinary tract.',
    drugInfo: {
      importantInfo: `Before using amoxicillin, tell your doctor if you are allergic to cephalosporins such as Omnicef, Cefzil, Ceftin, Keflex, and others. Also tell your doctor if you have asthma, liver or kidney disease, a bleeding or blood clotting disorder, mononucleosis (also called "mono"), or any type of allergy.`,
      caution: [
        `Antibiotic medicines can cause diarrhea. This may happen while you are taking amoxicillin, or within a few months after you stop taking it. This may be a sign of a new infection. If you have diarrhea that is watery or bloody, stop taking this medicine and call your doctor.
       `,
        `Amoxicillin can make birth control pills less effective. Ask your doctor about using a non-hormone method of birth control (such as a condom, diaphragm, spermicide) to prevent pregnancy while taking this medicine.`,
        `Amoxicillin will not treat a viral infection such as the common cold or flu. Do not share this medication with another person`,
        `To make sure this medicine is safe for you, tell your doctor if you have:
        kidney disease
        mononucleosis (also called "mono")  
        `
      ],
      furtherInfo: `Remember, keep this and all other medicines out of the reach of children, never share your medicines with others, and use this medication only for the indication prescribed.`,
      interactionsInfo: [
        `any other antibiotics;`,
        'allopurinol;',
        'probenecid;',
        'a blood thinner - warfarin, Coumadin, Jantoven'
      ],
      avoidance: `Antibiotic medicines can cause diarrhea, which may be a sign of a new infection. If you have diarrhea that is watery or bloody, call your doctor before using anti-diarrhea medicine.`,
      sideEffects: {
        info: `Get emergency medical help if you have signs of an allergic reaction to amoxicillin (hives, difficult breathing, swelling in your face or throat) or a severe skin reaction.`,
        effects: [
          'severe stomach pain, diarrhea that is watery or bloody',
          'rash',
          'abnormal liver function tests.',
          'nausea, vomiting, diarrhea, stomach pain'
        ]
      }
    },
    imageUrl: [
      'https://www.drugs.com/images/pills/nlm/167140299.jpg',
      'https://www.drugs.com/images/pills/fio/SDZ26131.JPG'
    ],
    url: 'https://www.drugs.com/amoxicillin.html',
    dosage: {
      info:
        'Take lisinopril exactly as prescribed by your doctor. Follow all directions on your prescription label.Some forms of amoxicillin may be taken with or without food. Check your medicine label to see if you should take your mediicne with food or not.',
      overdoseInfo: `Seek emergency medical attention or call the Poison Help line at 1-800-222-1222`,
      howTo: [
        `You must chew the chewable tablet before you swallow it.
          Swallow the regular tablet whole and do not crush, chew, or break it`,
        `Shake the oral suspension (liquid) before you measure a dose`,
        'Measure liquid medicine with the dosing syringe provided, or use a medicine dose-measuring device (not a kitchen spoon). You may mix the liquid with water, milk, baby formula, fruit juice, or ginger ale. Drink all of the mixture right away. Do not save for later use.',
        'Store at room temperature away from moisture, heat, and light.You may store liquid amoxicillin in a refrigerator but do not allow it to freeze. Throw away any liquid mediicne that is not used within 14 days after it was mixed at the pharmacy.'
      ],
      dosageMiss: `Take the missed dose as soon as you remember. Skip the missed dose if it is almost time for your next scheduled dose. Do not take two doses at one time.`
    }
  }),
  new Drug({
    NDC_Code: '',
    name: 'Hydrochlorothiazide',
    overview: `Hydrochlorothiazide is a thiazide diuretic (water pill) that helps prevent your body from absorbing too much salt, which can cause fluid retention.

      Hydrochlorothiazide is used to treat high blood pressure (hypertension).`,
    drugInfo: {
      importantInfo: `You should not use hydrochlorothiazide if you are unable to urinate.

      Before using hydrochlorothiazide, tell your doctor if you have liver disease, kidney disease, glaucoma, asthma or allergies, gout, diabetes, or if you are allergic to sulfa drugs or penicillin.
      
      Avoid drinking alcohol, which can increase some of the side effects of this medicine.`,
      caution: [
        `If you are being treated for high blood pressure, keep using hydrochlorothiazide even if you feel fine. High blood pressure often has no symptoms..
       `,
        `To make sure hydrochlorothiazide is safe for you, tell your doctor if you have: kidney disease, liver disease, gout, glaucoma or low levels of potassium or sodium in your blood`,
        `Hydrochlorothiazide is not expected to be harmful to an unborn baby. However, if you take this medicine during pregnancy, your newborn baby may develop jaundice or other problems.`,
        `To make sure this medicine is safe for you, Tell your doctor if you are pregnant or plan to become pregnant while taking hydrochlorothiazide.

        Hydrochlorothiazide can pass into breast milk and may harm a nursing baby. You should not breast-feed while using this medicine 
        `
      ],
      furtherInfo: `Remember, keep this and all other medicines out of the reach of children, never share your medicines with others, and use this medication only for the indication prescribed.`,
      interactionsInfo: [
        `cholestyramine, colestipol`,
        'insulin or oral diabetes medicine',
        'other blood pressure medications',
        'steroid medicine'
      ],
      avoidance: `Drinking alcohol with this medicine can cause side effects.
      Avoid becoming overheated or dehydrated during exercise, in hot weather, or by not drinking enough fluids. Follow your doctor's instructions about the type and amount of liquids you should drink. In some cases, drinking too much liquid can be as unsafe as not drinking enough.`,
      sideEffects: {
        info: `Get emergency medical help if you have signs of an allergic reaction to hydrochlorothiazide: hives; difficulty breathing; swelling of your face, lips, tongue, or throat.`,
        effects: [
          'a light-headed feeling, like you might pass out',
          'pale skin, easy bruising, unusual bleeding (nose, mouth, vagina, or rectum)',
          'signs of electrolyte imbalance--dry mouth, thirst, drowsiness, lack of energy, restlessness, muscle pain or weakness, fast heart rate, nausea and vomiting, little or no urine',
          'nausea, vomiting, diarrhea, stomach pain'
        ]
      }
    },
    imageUrl: [
      'https://www.drugs.com/images/pills/fio/HER00080.JPG',
      'https://www.drugs.com/images/pills/fio/UNI01280.JPG'
    ],
    url: 'https://www.drugs.com/hydrochlorothiazide.html',
    dosage: {
      info: `Hydrochlorothiazide is usually taken 25 mg to 100 mg orally once per day. Follow your doctor's dosing instructions very carefully.
        `,
      overdoseInfo: `Seek emergency medical attention or call the Poison Help line at 1-800-222-1222
        Overdose symptoms may include nausea, weakness, dizziness, dry mouth, thirst, and muscle pain or weakness`,
      howTo: [
        `Keep using this medicine as directed, even if you feel well. High blood pressure often has no symptoms. You may need to use blood pressure medicine for the rest of your life`,
        'While using hydrochlorothiazide, you may need frequent medical tests and blood pressure checks. Your blood and urine may both be tested if you have been vomiting or are dehydrated.',
        'Store hydrochlorothiazide at room temperature away from moisture, heat, and freezing. Keep the bottle tightly closed when not in use.'
      ],
      dosageMiss: `Take the missed dose as soon as you remember. Skip the missed dose if it is almost time for your next scheduled dose. Do not take two doses at one time.`
    }
  }),
  new Drug({
    NDC_Code: '',
    name: 'Bortezomib Solution, Reconstituted',
    overview: `This medication is used to treat certain types of cancer (such as multiple myeloma, mantle cell lymphoma). It works by slowing or stopping the growth of cancer cells`,
    drugInfo: {
      importantInfo: `Follow all directions on your medicine label and package. Tell each of your healthcare providers about all your medical conditions, allergies, and all medicines you use.`,
      caution: [
        ` If you are receiving this medication under the skin, make sure that the injection site is changed each time to lessen injury under the skin.
       `,
        `Before using this medication, tell your doctor or pharmacist your medical history, especially of: nerve problems (such as peripheral neuropathy), liver disease, kidney disease, loss of too much body water (dehydration), heart disease (such as heart failure), bleeding/blood disorders, current/recent infections, diabetes.`,
        `This drug may make you dizzy. Alcohol or marijuana (cannabis) can make you more dizzy.`,
        `Do not drive, use machinery, or do anything that needs alertness until you can do it safely. Limit alcoholic beverages. 
        `,
        'Talk to your doctor if you are using marijuana (cannabis).'
      ],
      furtherInfo: `Remember, keep this and all other medicines out of the reach of children, never share your medicines with others, and use this medication only for the indication prescribed.`,
      interactionsInfo: [
        `rifamycins (such as rifabutin)`,
        `St. John's wort, drugs used to treat seizures (such as carbamazepine, phenytoin)`,
        'other blood pressure medications',
        'steroid medicine'
      ],
      avoidance: `Drinking alcohol with this medicine can cause side effects.
      Avoid becoming overheated or dehydrated during exercise, in hot weather, or by not drinking enough fluids. Follow your doctor's instructions about the type and amount of liquids you should drink. In some cases, drinking too much liquid can be as unsafe as not drinking enough.`,
      sideEffects: {
        info: `Bortezomib may cause a serious viral infection of the brain that can lead to disability or death. Call your doctor right away if you have a severe headache, buzzing in your ears, vision problems, weakness, confusion, thinking problems, or a seizure (convulsions).`,
        effects: [
          'loss of appetite, nausea, vomiting',
          'diarrhea, constipation',
          'feeling tired',
          'fever, chills, cold or flu symptoms'
        ]
      }
    },
    imageUrl: [
      'https://5.imimg.com/data5/XU/XQ/MG/SELLER-92571846/bortezomib-injection-500x500.jpg',
      'https://envio911.com/image/cache/catalog/Botemib%20Bortezomib%203.5mg-500x500.jpeg'
    ],
    url: 'https://www.drugs.com/hydrochlorothiazide.html',
    dosage: {
      info: `The dosage is based on your body size, medical condition, laboratory tests, and response to treatment..
        `,
      overdoseInfo: `Seek emergency medical attention or call the Poison Help line at 1-800-222-1222
        Symptoms of overdose may include: severe dizziness, fainting, or easy bleeding/bruising.`,
      howTo: [
        `This medication is given by injection into a vein or under the skin by a health care professional.`,
        'You may be given medication to prevent nausea or vomiting while you are receiving bortezomib'
      ],
      dosageMiss: `Call your doctor for instructions if you will miss an appointment for your bortezomib injection.`
    }
  })
];

let done = 0;
for (let i = 0; i < drugs.length; i++) {
  drugs[i].save(function(err, result) {
    process.stdout.write('#');
    done++;
    if (done === drugs.length) {
      console.log('Done seeding...');
      console.log(result);
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
