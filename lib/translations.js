/**
 * Translations for Kojima Acupuncture Clinic
 * Structure supports easy addition of new languages
 */

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      treatments: "Treatments",
      aboutMe: "About Me",
      feesAppointment: "Fees & Appointment",
      clinicTour: "Clinic Tour",
      qa: "Q&A",
      contact: "Contact",
    },
    // Common
    common: {
      bookAppointment: "Book an Appointment",
      sendMessage: "Send message",
      contact: "Contact",
    },
    // Home
    home: {
      title: "Kojima Acupuncture",
      subtitle: "Tadashi Kojima",
      credential: "R. AC (Registered Acupuncturist)",
      intro: "Thank you for visiting our clinic. Here, we create personalized treatment programs tailored to each patient's unique constitution and condition. Our approach integrates Nagano style, Kiiko Matsumoto style, and our own experienced-based methods. We offer a variety of treatments for different symptoms. If you don't see immediate improvement, please don't hesitate to consult with us.",
      location: "Location",
      address: "40 Wynford Drive # 301 Toronto, Ontario",
      parking: "Parking",
      parkingInfo: "If you are arriving by car, please park in Lot 23 (Kojima Acupuncture reserved parking) or any available space between Lot 26 and Lot 38 (visitor parking).",
    },
    // Stats
    stats: {
      years: "+ Years of experience",
      patients: "Patients treated",
      styles: "Styles mastered",
    },
    // Treatments
    treatments: {
      howToGetTreated: "How to get treated",
      treatmentProcedures: "Treatment Procedures",
      equipmentUsed: "Equipment used in treatments",
      services: [
        {
          num: "Step 1",
          title: "Make a Reservation",
          description: "Schedule your visit by phone, email, or text message.",
          hasButton: true,
        },
        {
          num: "Step 2",
          title: "Visit the Clinic",
          description: "Come to our clinic on your scheduled date and time.",
        },
        {
          num: "Step 3",
          title: "Set Up a Treatment Program",
          description: "Upon arrival, you will undergo a thorough assessment which includes filling out your medical chart and participating in an interview. We will conduct various diagnostic tests such as pulse, abdominal, back, and neck diagnosis to tailor a treatment program suited to your needs.",
        },
        {
          num: "Step 4",
          title: "Begin Acupuncture and Moxibustion Treatment",
          description: "Our treatment approach is divided into three stages, typically lasting between 45 minutes to an hour, depending on individual conditions and needs.",
        },
      ],
      procedureItems: [
        {
          num: "1",
          description: "We will address the root causes of the patient's condition using a root treatment method. This approach aims to identify and eliminate factors that hinder the body's natural healing abilities, thereby restoring its inherent capacity for self-healing. If symptoms are alleviated through this root treatment, further symptomatic treatment may not be necessary.",
        },
        {
          num: "2",
          description: "Should there be a need for further intervention after the root treatment, we will proceed with symptomatic treatment methods. These treatments are designed to alleviate specific symptoms such as pain, stiffness, numbness, dullness, and discomfort.",
        },
        {
          num: "3",
          description: "Patients will receive detailed explanations about their medical conditions, strategies for accelerated recovery including lifestyle and exercise recommendations, and information about the treatment duration and schedule.",
        },
      ],
      equipment: [
        {
          category: "Acupuncture needle",
          description: "Many people worry that acupuncture needles will be painful, similar to the needles used for injections, but they are actually much thinner. At our clinic, we use ultra-thin, flexible needles that are about the thickness of a hair, ranging from 0.10 mm to 0.20 mm. While it's not entirely pain-free—comparable to the sensation of a mosquito bite—it's generally minimal. Additionally, all our acupuncture needles are disposable to ensure cleanliness and safety.",
          image: "/assets/acupuncture-needle.png",
          alt: "Acupuncture Needles",
        },
        {
          category: "Moxa (moxibustion)",
          description: "Point moxibustion is a hyperthermia therapy that involves placing tiny pieces of moxa, about half the size of a grain of rice, on specific acupuncture points. To safeguard against burns, a protective Shiunko ointment is applied beforehand. This method allows for precise targeting of key areas, proving especially beneficial for symptoms associated with cold and for enhancing the treatment's effects. It is particularly effective for individuals with chronic conditions or those who have low body energy, known as 'kyo-sho'. Depending on the individual's condition, point moxibustion can also be safely practiced at home with professional guidance.",
          image: "/assets/moxa1.png",
          alt: "Moxa (moxibustion)",
        },
        {
          category: "Child Safe Acupuncture",
          description: "Child safe acupuncture involves a non-invasive method tailored for children, utilizing stroking or rubbing techniques rather than needle insertion. Various degrees of pressure are applied to stimulate the body's natural healing responses. Children have a vigorous metabolism, and even mild stimulation can significantly enhance their natural healing abilities, making this approach highly effective.",
          image: "/assets/child-safe-acupuncture.png",
          alt: "Child Safe Acupuncture",
        },
        {
          category: "Skin Needle Acupuncture",
          description: "Skin needle acupuncture involves the application of tiny needles, each about 0.06 mm in length, to crucial acupoints to prolong the therapeutic effects after treatment. These needles are affixed with tape and typically left in place for about three days. This method is especially suited for sensitive areas of the body such as the fingers, toes, and face.",
          image: "/assets/skin-needle-acupuncture.png",
          alt: "Skin Needle Acupuncture",
        },
        {
          category: "Kinesiology tape",
          description: "Kinesiology tape is commonly used for acute muscle symptoms and sports injuries, proving particularly effective for knee-related issues. Its usage has become increasingly visible among athletes, including those participating in the Olympics and various professional sports.",
          image: "/assets/kinesiology-tape.png",
          alt: "Kinesiology tape",
        },
        {
          category: "Electronic heating moxa device",
          description: "The electronic warm moxa device used in our clinic warms the acupuncture needle and its surroundings by emitting far infrared rays from special ceramics energized by electricity. This method serves the same purpose as moxa head acupuncture but offers the advantage of delivering sustained thermal energy for extended periods. This allows for deeper heat penetration into the body, making it ideal for targeting deeper tissues. Additionally, this treatment is known for its comforting and relaxing effects.",
          image: "/assets/heating-moxa-device.png",
          alt: "Electronic heating moxa device",
        },
        {
          category: "TDP Lamp",
          description: "The TDP lamp emits far-infrared radiation to warm the body, making it ideal for applying hyperthermia over a broad area. Typically used in conjunction with needle acupuncture, the lamp is positioned above the treatment area to enhance the therapeutic effects by providing deep, penetrating heat.",
          image: "/assets/tdp-lamp.png",
          alt: "TDP Lamp",
        },
      ],
    },
    // Fees
    fees: {
      businessHours: "Business Hours",
      open: "Open",
      hoursWeekday: "Monday to Friday 9:00(AM) ~ 6:00(PM)",
      hoursSaturday: "Saturday 9:00(AM) ~ 4:00(PM)",
      closed: "Closed on Sundays and National Holidays",
      services: [
        { num: "$140", title: "First Visit", description: "Initial consultation & Treatment", href: "/contact" },
        { num: "$120", title: "Follow-Up Treatment", description: "Ongoing sessions to continue your treatment plan", href: "/contact" },
      ],
    },
    // About
    about: {
      title: "About me",
      background: "Background",
      experience: "Experience",
      info: [
        { fieldName: "Name", fieldValue: "Tadashi Kojima" },
        { fieldName: "Phone", fieldValue: "(416) 486 0287" },
        { fieldName: "Experience", fieldValue: "30+ Years" },
        { fieldName: "Email", fieldValue: "tadashikojima89@gmail.com" },
        { fieldName: "Nationality", fieldValue: "Japanese" },
        { fieldName: "Languages", fieldValue: "English, Japanese" },
      ],
      experienceItems: [
        { company: "Kanto Acupuncture College", position: "Graduated", duration: "1992" },
        { company: "Japan", position: "Acquired acupuncture qualification", duration: "1992" },
        { company: "Shanghai Medical Academy", position: "International Acupuncture Training Course", duration: "1992~1993" },
        { company: "Ishige clinic (Japan)", position: "Practitioner at a back pain clinic", duration: "1992 - 1994" },
        { company: "Tokyo shiatsu clinic (Toronto)", position: "Practitioner at an acupuncture clinic", duration: "1994 - 1999" },
        { company: "Leaside Acupuncture Clinic (Toronto)", position: "Started an acupuncture clinic", duration: "1999 - now" },
      ],
    },
    // Contact
    contact: {
      bookAppointment: "Book Appointment",
      firstname: "Firstname",
      lastname: "Lastname",
      email: "Email address",
      phone: "Phone number",
      selectDate: "Select Date",
      selectTime: "Select Time",
      selectService: "Select a Service",
      selectServiceLabel: "Select a Service",
      firstVisit: "First Visit",
      ongoingTreatment: "Ongoing Treatment",
      messagePlaceholder: "Type your message here",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
      messageSent: "Message sent successfully",
      messageFailed: "Failed to send the message, please try again.",
    },
    // Clinic Tour (image paths are same for both languages)
    clinicTour: {
      heading: "Clinic Tour",
      items: [
        { description: "Clinic Building", alt: "Clinic Building", image: "/assets/building.png" },
        { description: "Building Entrance", alt: "Building Entrance", image: "/assets/building-entrance.png" },
        { description: "Parking", alt: "Parking", image: "/assets/parking.png" },
        { description: "Clinic Entrance", alt: "Clinic Entrance", image: "/assets/clinic.png" },
        { description: "Treatment Room", alt: "Treatment Room", image: "/assets/treatment-room.png" },
      ],
    },
    // Q&A
    qa: {
      heading: "Frequently Asked Questions",
      items: [
        { num: "Q1", title: "How can I make a reservation?", description: "Our clinic operates by appointment only. Please schedule your appointment in advance by calling us at 416-486-0287 or emailing kojima@rogers.com. For your first visit, we recommend arriving a little early, as it may take extra time to complete the medical record and conduct the initial interview. Please ensure you arrive at least 10 minutes before your scheduled treatment time." },
        { num: "Q2", title: "Is acupuncture painful?", description: "Many people associate acupuncture with pain, but the experience can vary widely depending on your individual constitution and sensitivity. We can adjust the thickness of the needles and the treatment approach to ensure that it is comfortable for you. In many cases, the treatment is not painful at all." },
        { num: "Q3", title: "How often should I visit?", description: "Depending on the symptom, it is more effective to continue without a gap if there is sudden disease or symptom and pain is strong. People with intractable diseases and chronic diseases should take 1-2 times a week, and health management and disease prevention should take 1-2 times a month. Please feel free to contact us when you come to acupuncture treatment." },
        { num: "Q4", title: "Are acupuncture needles disposable?", description: "Yes. At our clinic, 100% of the acupuncture needles are disposed after each use. There is no need to worry about infection. Please be assured." },
        { num: "Q5", title: "How should I dress for my appointment?", description: "When treating symptoms, sometimes only the affected area is targeted. However, Oriental medicine typically involves comprehensive treatments. For this reason, treatments such as acupuncture and moxibustion often use acupoints located on the back and feet. It's advisable to bring your own comfortable clothing, like T-shirts and shorts, although we do provide garments for changing if needed." },
        { num: "Q6", title: "Does acupuncture make conditions worse?", description: "Generally, acupuncture shouldn't worsen your condition unless you have a metal allergy. If acupuncture seems unsuitable, it could be that the treatment method wasn't compatible with your body type. There are many different acupuncture techniques available. Consider finding a practitioner who better suits your needs by trying a different clinic." },
        { num: "Q7", title: "Is health insurance effective for acupuncture and moxibustion treatment?", description: "OHIP does not cover acupuncture or moxibustion. However, if you have private health insurance, it's a good idea to contact your provider to inquire about coverage. The inclusion of acupuncture and moxibustion treatments depends on your specific insurance plan." },
        { num: "Q8", title: "Is it safe to use with Western medicine?", description: "Combining Western medicine with acupuncture generally poses no issues. Using acupuncture alongside medication may accelerate symptom relief and minimize drug side effects. Additionally, many people visit our treatment center preferring to use minimal medication. While synergistic effects have been observed in some cases when combined with Western medicine, outcomes can vary based on individual symptoms and medical conditions. Please don't hesitate to contact us to discuss your specific situation." },
        { num: "Q9", title: "Is there a cancellation fee?", description: "No cancellation fee will be applied if you cancel before the final reception time on the day prior to your scheduled appointment. Cancellations made after this time will incur a fee." },
        { num: "Q10", title: "How long are the acupuncture treatments?", description: "The duration of the treatment varies based on the symptoms and their onset, but it typically lasts about one hour. The length of the treatment does not affect the fee. If it's your first visit, please arrive 10 minutes early to allow time for filling out medical forms and for an initial consultation." },
        { num: "Q11", title: "How can I pay the treatment fee?", description: "Our clinic accepts cash, debit cards, and checks. Please note that we do not accept credit cards." },
        { num: "Q12", title: "Does acupuncture really work?", description: "Consider the opposite perspective: why would therapies be used for over 2000 years if they were ineffective? The World Health Organization (WHO) recognizes that acupuncture is effective for many diseases. Recently, acupuncture has been widely adopted not just in Asian countries like China and Japan, but globally as well. However, the effectiveness of acupuncture and moxibustion treatments can vary among individuals, and there are some conditions for which these treatments are not recommended." },
      ],
    },
  },
  ja: {
    // Navigation
    nav: {
      home: "ホーム",
      treatments: "治療について",
      aboutMe: "プロフィール",
      feesAppointment: "料金",
      clinicTour: "クリニック",
      qa: "Q&A",
      contact: "お問い合わせ",
    },
    // Common
    common: {
      bookAppointment: "予約する",
      sendMessage: "送信する",
      contact: "お問い合わせ",
    },
    // Home
    home: {
      title: "Kojima Acupuncture",
      subtitle: "小島 正",
      credential: "R. AC（登録鍼灸師）",
      intro: "当院へお越しいただきありがとうございます。当院では、患者様お一人お一人の体質や症状に合わせたオーダーメイドの治療プログラムをご提供しております。長野式、キーコ・松本式、そして長年の経験に基づく独自の手法を組み合わせ、様々な症状に対応いたします。すぐに改善が見られない場合も、お気軽にご相談ください。",
      location: "所在地",
      address: "40 Wynford Drive # 301 Toronto, Ontario",
      parking: "駐車場",
      parkingInfo: "お車でお越しの方は、ロット23（小島鍼灸院専用駐車場）またはロット26〜38の間の空いているスペース（来院者用駐車場）をご利用ください。",
    },
    // Stats
    stats: {
      years: "年以上の経験",
      patients: "症例実績",
      styles: "流派を習得",
    },
    // Treatments
    treatments: {
      howToGetTreated: "治療の流れ",
      treatmentProcedures: "治療手順",
      equipmentUsed: "治療で使用する器具",
      services: [
        { num: "ステップ1", title: "ご予約", description: "お電話、メール、またはメッセージでご予約ください。", hasButton: true },
        { num: "ステップ2", title: "ご来院", description: "ご予約いただいた日時にクリニックへお越しください。", hasButton: false },
        { num: "ステップ3", title: "治療プログラムの作成", description: "ご来院後、問診票のご記入とカウンセリングを行い、脈診・腹診・背中・首の診察など、様々な診断を通じて、お客様に最適な治療プログラムを作成いたします。", hasButton: false },
        { num: "ステップ4", title: "鍼灸治療の開始", description: "治療は3段階に分かれており、症状や個人差により異なりますが、通常45分〜1時間程度です。", hasButton: false },
      ],
      procedureItems: [
        { num: "1", description: "本治法により、体の自然治癒力を妨げる根本原因を特定し、取り除くことで、本来の自己治癒能力を回復させます。本治法で症状が改善した場合、対症療法が必要ない場合もあります。" },
        { num: "2", description: "本治法の後、さらなる治療が必要な場合は、痛み・こり・しびれ・だるさ・不快感などの個別の症状を和らげる対症療法を行います。" },
        { num: "3", description: "患者様の症状について詳しくご説明し、生活習慣や運動のアドバイスを含む回復促進の方法、治療期間やスケジュールについてお伝えいたします。" },
      ],
      equipment: [
        { category: "鍼", description: "鍼は注射針のような痛みを想像される方が多いですが、実際にははるかに細いものです。当院では髪の毛ほどの細さ（0.10mm〜0.20mm）の極細で柔らかい鍼を使用しています。蚊に刺されたような感覚で、完全に無痛とは言えませんが、多くの場合ほとんど痛みはありません。また、衛生と安全のため、すべての鍼は使い捨てです。", image: "/assets/acupuncture-needle.png", alt: "鍼" },
        { category: "灸（もぐさ）", description: "点灸は、米粒の半分ほどの小さなもぐさを経穴に乗せ、温熱療法を行うものです。やけどの防止のため、事前に紫雲膏を塗布します。冷えや治療効果の増強に特に有効で、慢性症状や「虚証」の方に効果的です。症状に応じて、専門家の指導のもと自宅でも安全に行えます。", image: "/assets/moxa1.png", alt: "灸（もぐさ）" },
        { category: "小児鍼", description: "小児鍼は、針を刺さずに撫でたり擦ったりする非侵襲的な方法で、お子様に合わせた刺激量で自然治癒力を高めます。お子様は代謝が活発なため、軽い刺激でも効果が期待できます。", image: "/assets/child-safe-acupuncture.png", alt: "小児鍼" },
        { category: "皮内鍼", description: "皮内鍼は、0.06mmほどの極小の鍼を重要な経穴に貼り、治療後の効果を持続させる方法です。テープで固定し、約3日間留置します。指、足の指、顔など敏感な部位に適しています。", image: "/assets/skin-needle-acupuncture.png", alt: "皮内鍼" },
        { category: "キネシオテープ", description: "急性の筋肉症状やスポーツ障害に効果的で、特に膝の症状に有効です。オリンピックやプロスポーツの選手にも広く使用されています。", image: "/assets/kinesiology-tape.png", alt: "キネシオテープ" },
        { category: "電子温灸器", description: "当院で使用する電子温灸器は、特殊セラミックから遠赤外線を放出し、鍼とその周辺を温めます。灸頭鍼と同様の効果がありながら、長時間持続的な温熱を届けられるため、深部組織への浸透に適しています。心地よくリラックスできる治療です。", image: "/assets/heating-moxa-device.png", alt: "電子温灸器" },
        { category: "TDPランプ", description: "TDPランプは遠赤外線で体を温め、広範囲の温熱療法に適しています。鍼治療と併用し、治療部位の上に配置して、深く浸透する熱で治療効果を高めます。", image: "/assets/tdp-lamp.png", alt: "TDPランプ" },
      ],
    },
    // Fees
    fees: {
      businessHours: "診療時間",
      open: "診療日",
      hoursWeekday: "月曜〜金曜 9:00〜18:00",
      hoursSaturday: "土曜 9:00〜16:00",
      closed: "日曜・祝日は休診",
      services: [
        { num: "$140", title: "初診", description: "初回カウンセリング・治療", href: "/contact" },
        { num: "$120", title: "再診", description: "継続治療", href: "/contact" },
      ],
    },
    // About
    about: {
      title: "プロフィール",
      background: "経歴",
      experience: "経験",
      info: [
        { fieldName: "お名前", fieldValue: "小島 正" },
        { fieldName: "電話", fieldValue: "(416) 486 0287" },
        { fieldName: "経験", fieldValue: "30年以上" },
        { fieldName: "メール", fieldValue: "tadashikojima89@gmail.com" },
        { fieldName: "国籍", fieldValue: "日本" },
        { fieldName: "言語", fieldValue: "英語、日本語" },
      ],
      experienceItems: [
        { company: "関東鍼灸専門学校", position: "卒業", duration: "1992年" },
        { company: "日本", position: "鍼灸師資格取得", duration: "1992年" },
        { company: "上海医学院", position: "国際鍼灸研修コース修了", duration: "1992〜1993年" },
        { company: "石毛クリニック（日本）", position: "腰痛専門クリニック勤務", duration: "1992〜1994年" },
        { company: "東京指圧クリニック（トロント）", position: "鍼灸クリニック勤務", duration: "1994〜1999年" },
        { company: "リサイド鍼灸院（トロント）", position: "鍼灸院開業", duration: "1999年〜現在" },
      ],
    },
    // Contact
    contact: {
      bookAppointment: "ご予約",
      firstname: "名",
      lastname: "姓",
      email: "メールアドレス",
      phone: "電話番号",
      selectDate: "日付を選択",
      selectTime: "時間を選択",
      selectService: "サービスを選択",
      selectServiceLabel: "サービスを選択",
      firstVisit: "初診",
      ongoingTreatment: "継続治療",
      messagePlaceholder: "メッセージをご記入ください",
      phoneLabel: "電話",
      emailLabel: "メール",
      addressLabel: "住所",
      messageSent: "メッセージを送信しました",
      messageFailed: "送信に失敗しました。もう一度お試しください。",
    },
    // Clinic Tour
    clinicTour: {
      heading: "クリニック案内",
      items: [
        { description: "クリニック外観", alt: "クリニック外観", image: "/assets/building.png" },
        { description: "建物入口", alt: "建物入口", image: "/assets/building-entrance.png" },
        { description: "駐車場", alt: "駐車場", image: "/assets/parking.png" },
        { description: "クリニック入口", alt: "クリニック入口", image: "/assets/clinic.png" },
        { description: "治療室", alt: "治療室", image: "/assets/treatment-room.png" },
      ],
    },
    // Q&A
    qa: {
      heading: "よくある質問",
      items: [
        { num: "Q1", title: "予約はどのようにすればよいですか？", description: "当院は完全予約制です。お電話（416-486-0287）またはメール（kojima@rogers.com）で事前にご予約ください。初診の方は、問診票の記入や初回カウンセリングに時間がかかりますので、治療開始の10分前までにお越しください。" },
        { num: "Q2", title: "鍼は痛いですか？", description: "鍼と聞くと痛みを連想される方が多いですが、体質や感覚によって個人差があります。当院では針の太さや刺し方を調整し、できるだけ心地よく受けていただけるよう心がけています。多くの場合、ほとんど痛みを感じません。" },
        { num: "Q3", title: "どのくらいの頻度で通院すればよいですか？", description: "急な症状や痛みが強い場合は、間隔を空けずに継続して通院する方が効果的です。慢性疾患の方は週1〜2回、健康維持や予防の方は月1〜2回が目安です。お気軽にご相談ください。" },
        { num: "Q4", title: "鍼は使い捨てですか？", description: "はい。当院では使用した鍼は100％廃棄しております。感染の心配はございませんのでご安心ください。" },
        { num: "Q5", title: "服装はどのようなものがよいですか？", description: "症状によっては患部のみの治療もありますが、東洋医学では全身的な治療を行うことが多いため、背中や足の経穴を使うことがあります。Tシャツやショートパンツなど動きやすい服装をお持ちいただくか、当院でも着替え用の衣類をご用意しております。" },
        { num: "Q6", title: "鍼治療で症状が悪化することはありますか？", description: "金属アレルギーがなければ、一般的に鍼で症状が悪化することはありません。合わない場合は、治療法が体質に合っていない可能性があります。鍼灸には様々な流派がありますので、別のクリニックをお試しいただくことも一つの方法です。" },
        { num: "Q7", title: "健康保険は使えますか？", description: "OHIP（オンタリオ州の公的医療保険）では鍼灸治療は対象外です。民間の健康保険に加入されている場合は、お持ちの保険会社にお問い合わせください。プランによっては鍼灸治療が含まれる場合があります。" },
        { num: "Q8", title: "西洋医学の薬と併用しても大丈夫ですか？", description: "西洋医学と鍼灸の併用は一般的に問題ありません。薬と併用することで症状の改善が早まり、薬の副作用を軽減できる場合もあります。当院には薬を最小限にしたいという方も多くいらっしゃいます。症状や体質によって効果は異なりますので、お気軽にご相談ください。" },
        { num: "Q9", title: "キャンセル料はかかりますか？", description: "予約日の前日までにキャンセルいただいた場合は、キャンセル料は発生しません。それ以降のキャンセルには料金がかかります。" },
        { num: "Q10", title: "治療時間はどのくらいですか？", description: "症状や経過によって異なりますが、通常は約1時間程度です。治療時間の長さによって料金は変わりません。初診の方は、問診票の記入や初回カウンセリングのため、10分早めにお越しください。" },
        { num: "Q11", title: "支払い方法は？", description: "現金、デビットカード、小切手をご利用いただけます。クレジットカードはご利用いただけませんのでご了承ください。" },
        { num: "Q12", title: "鍼灸は本当に効くのですか？", description: "2000年以上続いてきた療法が効果がなければ、なぜ今でも使われているでしょうか。WHO（世界保健機関）も鍼灸の多くの疾患への効果を認めています。近年は中国や日本だけでなく、世界中で鍼灸が普及しています。ただし、効果には個人差があり、適さない症状もあります。お気軽にご相談ください。" },
      ],
    },
  },
};

export function getTranslation(lang, path) {
  const keys = path.split(".");
  let value = translations[lang] || translations.en;
  for (const key of keys) {
    value = value?.[key];
  }
  return value ?? getTranslation("en", path);
}
