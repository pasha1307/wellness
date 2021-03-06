(function() {
  'use strict';

  angular
      .module('shoppingCart')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
//    var data = [
//      {
//        'title': 'AngularJS',
//        'url': 'https://angularjs.org/',
//        'description': 'HTML enhanced for web apps!',
//        'logo': 'angular.png'
//      },
//      {
//        'title': 'BrowserSync',
//        'url': 'http://browsersync.io/',
//        'description': 'Time-saving synchronised browser testing.',
//        'logo': 'browsersync.png'
//      },
//      {
//        'title': 'GulpJS',
//        'url': 'http://gulpjs.com/',
//        'description': 'The streaming build system.',
//        'logo': 'gulp.png'
//      },
//      {
//        'title': 'Jasmine',
//        'url': 'http://jasmine.github.io/',
//        'description': 'Behavior-Driven JavaScript.',
//        'logo': 'jasmine.png'
//      },
//      {
//        'title': 'Karma',
//        'url': 'http://karma-runner.github.io/',
//        'description': 'Spectacular Test Runner for JavaScript.',
//        'logo': 'karma.png'
//      },
//      {
//        'title': 'Protractor',
//        'url': 'https://github.com/angular/protractor',
//        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
//        'logo': 'protractor.png'
//      },
//      {
//        'title': 'Bootstrap',
//        'url': 'http://getbootstrap.com/',
//        'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
//        'logo': 'bootstrap.png'
//      },
//      {
//        'title': 'Angular UI Bootstrap',
//        'url': 'http://angular-ui.github.io/bootstrap/',
//        'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
//        'logo': 'ui-bootstrap.png'
//      },
//      {
//        'title': 'Sass (Node)',
//        'url': 'https://github.com/sass/node-sass',
//        'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
//        'logo': 'node-sass.png'
//      }
//    ];
    var data = [{"id":"a1","name":"Ultrasonic Facial Treatment","detail":"An ultrasonic facial treatment is used to increase the production of collagen, firm the skin, and help skin cells to cycle more quickly, leading to clearer, more youthful looking skin. This type of treatment is safe for most people to use","selected":0,"specs":[{"time":"60","price":"120"},{"time":"90","price":"160"}]},{"id":"a2","name":"Back and Neck Massage","detail":"Back, Shoulders, and Neck Massage: Quick Relief for the...","selected":0,"specs":[{"time":"30","price":"50"},{"time":"60","price":"90"}]},{"id":"a3","name":"Wellness Massage","detail":"This is a combination of hot stone and deep tissue massage.  An optional component is the use of Ashiatu Oriental Bar Therapy whereby using a bar to regulate pressure,  body weight is applied to the back.","selected":0,"specs":[{"time":"60","price":"95"},{"time":"90","price":"135"}]},{"id":"a6","name":"Pure Breath Facial","detail":"Oxygen infusion facial that smoothes the skin and restores moisture.  The skin is cleansed and prepared then infused with nutrients and antioxidants.  This process is helpful in the treatment of acne, psoriasis, excema, rosacea, and sunburn.  By infusing oxygen into the deep skin tissue, cell metabolism is stimulated.  The growth of new cells is encouraged, resulting in healthier, younger looking skin.","selected":0,"specs":[{"time":"60","price":"100","type":" "},{"time":"90","price":"135","type":" "}]},{"id":"a7","name":"Microdermabrasion","detail":"This is a procedure that uses fine crystals and a controlled vacuum to expoliate the skin.  After the treatment, the skin has improved texture and softness, as well as fewer imperfections such as wrinkles and scars.","selected":0,"specs":[{"time":"60","price":"85","type":" "}]},{"id":"a8","name":"Waxing","detail":"Waxing ofBROW, FULL ARM, BRAZILIAN BIKINI, HALF LEG, LIP, CHIN OR CHEEK, UNDER ARM, NOSE, EAR, FRENCH BIKINI, BACK, BIKINI, CHEST, FULL LEG","selected":0,"specs":[{"time":"60","price":"15","type":"Brow"},{"time":"60","price":"50","type":"Full arm"},{"time":"60","price":"65","type":"Brazilian Bikini"},{"time":"60","price":"45","type":"Half Leg"},{"time":"60","price":"10","type":"Lip, chin, or cheek"},{"time":"60","price":"10","type":"Nose, ear"},{"time":"60","price":"50","type":"French Bikini"},{"time":"60","price":"50","type":"Back"},{"time":"60","price":"35","type":"Bikini"},{"time":"60","price":"50","type":"Chest"},{"time":"60","price":"75","type":"Full leg"}]},{"id":"a9","name":"Signature Wellness Facial","detail":"A microdermabrasion and oxygen infusion facial microdermabrasion uses crystals to effectively exfoliate the skin.  In doing so it freshens the appearance of the skin.  Wrinkles, brown spots, fine lines, and acne scars are affected in such a way as to appear less noticeable.  Oxygen infusion restores moisture to the skin and increases cell reproduction, thus encouraging younger looking skin.","selected":0,"specs":[{"time":"75","price":"150","type":" "},{"time":" ","price":" ","type":" "}]},{"id":"b10","name":"Relaxation","detail":"A classic technique using therapeutic soft tissue manipulation to ease muscular tension and stress while providing deep relaxation and sense of renewal.","selected":0,"specs":[{"time":"60","price":"85","type":" "},{"time":"90","price":"125","type":" "}]},{"id":"b11","name":"Deep Tissue","detail":"A series of intensive techniques are used to manipulate sore, tight muscles and the connective tissues that hold them in place. Deep tissue work increases circulation, releases built-up toxins, and heals and restores balance to the body and nervous system.","selected":0,"specs":[{"time":"60","price":"85","type":" "},{"time":"90","price":"125","type":" "}]},{"id":"b12","name":"Sport Massage","detail":"A must for pre- or post-workout flexibility, recovery and restoration. Deep pressure techniques are applied to targeted muscle groups to warm up muscles prior to your workout or to flush post- workout toxins.","selected":0,"specs":[{"time":"60","price":"85","type":" "},{"time":"90","price":"125","type":" "}]},{"id":"b13","name":"Romancing the Stone","detail":"A breakthrough technique to balance the body’s emotional, mental, physical, and spiritual energies. The application of gently heated stones as part of a deeply relaxing and penetrating massage unlocks the bodys natural healing energies.","selected":0,"specs":[{"time":" ","price":" ","type":" "},{"time":"90","price":"125","type":" "}]},{"id":"b14","name":"Reflexology","detail":"This calm- inducing ancient Eastern technique uses pressure point massage on the hands and feet to restore the flow of energy throughout the body. Your entire being will feel lighter and free of stress.","selected":0,"specs":[{"time":"30","price":"50","type":" "},{"time":" ","price":" ","type":" "}]},{"id":"b15","name":"Mini Vacation for Two","detail":"For budding lovers, enduring romantic partners or just really great friends. Enjoy the experience of rest, relaxation and rejuvenation that awaits you in the beautiful Couple’s Suite at Winchester Wellness Centre. Come and share your togetherness.","selected":0,"specs":[{"time":"60","price":"75","type":"per a person"},{"time":"90","price":"110","type":"per a person"}]},{"id":"b16","name":"Thai Massage","detail":"Benefit from improved flexibility, relief from muscular and joint tension, and enhanced blood circulation. A combination of gentle stretches and  pressure is used to realign the body.","selected":0,"specs":[{"time":"60","price":"85","type":" "},{"time":" ","price":" ","type":" "}]},{"id":"b17","name":"Great Expectations","detail":"This soothing full-body massage targets areas of tension during and after pregnancy, and will help relieve lower back pain, sciatica and water retention. An excellent way to increase circulation, this technique allows you to lie down safely and comfortably, and can be used anytime after the first trimester.","selected":0,"specs":[{"time":"60","price":"85","type":" "},{"time":"90","price":"125","type":" "}]},{"id":"b18","name":"Forever Young Facial","detail":"Give you exfoliation a professional boost with instant resurfacing treatment that leaves skin smooth and refreshed with no down time. Six botanical stem cells work to protect from external stressors while peptides rejuvenate and revitalize.Combine the best of science and nature to achieve age-defying results.After just one treatment ,skin feels smoother,looks brighter and energized.Wrinkles and lines are less visible.","selected":0,"specs":[{"time":"75","price":"140","type":" "},{"time":"","price":"","type":""}]},{"id":"b19","name":"Clear Result Facial","detail":"Designed for the treatment of acne and other skin irritations.  We begin with a deep pore cleansing to remove impurities.  If indicated, extraction is performed.  A clarifying mask is applied; the treatment concludes with a facial massage.","selected":0,"specs":[{"time":"60","price":"75","type":" "},{"time":"","price":"","type":""}]},{"id":"c20","name":"Instant Glamour Facial","detail":"For the client whose time is precious.  Face is cleansed, exfoliated, masked and moisturized. A quick pick me up.","selected":0,"specs":[{"time":"30","price":"50","type":" "},{"time":"","price":"","type":""}]},{"id":"c21","name":"For Him Special","detail":"A specific treatment for men designed to relieve irritation resulting from ingrown hair and shaving.   Hydrating, cleansing, and soothing treatment followed by face, neck and shoulder massage.","selected":0,"specs":[{"time":"60","price":"75","type":" "},{"time":"","price":"","type":""}]},{"id":"c22","name":"Back Facial","detail":"Designed for the treatment of acne and other skin irrit...","selected":0,"specs":[{"time":"60","price":"75","type":" "},{"time":"","price":"","type":""}]},{"id":"c23","name":"Chemical Peels","detail":"We offer a variety of alpha and beta-hydroxy acid peeling agents at various strengths and tailor them to your needs.   A series of peels is usually required to obtain a significant benefit from the procedure.  Typically, six to ten peels areperformed  at intervals of one to three weeks.","selected":0,"specs":[{"time":"30","price":"90","type":"version one"},{"time":"60","price":"100","type":"version two"},{"time":"90","price":"130","type":"version three"}]}];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
