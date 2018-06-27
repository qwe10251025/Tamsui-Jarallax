    init = function(){
        var jarallax = new Jarallax();
       jarallax.setDefault('.redcity,.mrt,.sunset,.mbridge,.sun,.moon,.boat,.m2,.nbridge,.night,.end,.endtxt,.txt',{display:'none'});
       jarallax.setDefault('.txt',{display:'block'});

       jarallax.addAnimation('.mrt',[{progress:'0%',left:'-70%',opacity:'1',display:'block'},
                                     {progress:'10%',left:'50%',opacity:'1',display:'block'},
                                     {progress:'20%',left:'150%',opacity:'0'}])
       jarallax.addAnimation('.sunset',
                             [{progress:'0%',opacity:'1',display:'block'},{progress:'20%',opacity:'0'}])


         
         jarallax.addAnimation('.boat,.m2',[{progress:'20%',opacity:'0',display:'block'},                 
                                           {progress:'30%',opacity:'1',display:'block'},
                                            {progress:'40%',opacity:'0',display:'block'}
                                          ])
         
         
         
         jarallax.addAnimation('.mbridge',[{progress:'20%',opacity:'0',display:'block'},                 
                                           {progress:'30%',opacity:'1',display:'block'},
                                            {progress:'40%',opacity:'0',display:'block'}

                                          ])
              jarallax.addAnimation('.nbridge,.night',[{progress:'30%',opacity:'0',display:'block'},                 
                                           {progress:'45%',opacity:'1',display:'block'},
                                           {progress:'60%',opacity:'0',display:'block'}
                                          ])
        
        jarallax.addAnimation('.sun',[{progress:'20%',top:'0%',opacity:'0',display:'block'},                 
                                        {progress:'35%',top:'70%',opacity:'1',display:'block'},
                                        {progress:'40%',top:'130%',opacity:'0',display:'block'},
                                        ])
        jarallax.addAnimation('.moon',[{progress:'40%',top:'0%',opacity:'0',display:'block'},                 
                                
                                        {progress:'50%',top:'70%',opacity:'1',display:'block'},
                                        {progress:'60%',top:'100%',opacity:'0',display:'block'},
                                        ])
      
          jarallax.addAnimation('.redcity',[ 
                                        {progress:'55%',opacity:'0',display:'block'},                 
                                        {progress:'65%',opacity:'1',display:'block'},
                                        {progress:'80%',opacity:'0'}                                        
                                        ])
           jarallax.addAnimation('.txt',[                                                        
                                        {progress:'65%',opacity:'1',display:'block'},
                                        {progress:'80%',opacity:'0'}                                       
                                        ])
    
            jarallax.addAnimation('.endtxt,.end',[ 
                                        {progress:'70%',opacity:'0',display:'block'},                 
                                        {progress:'100%',opacity:'1',display:'block'},
                                        ])
    }