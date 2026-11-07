        const body = document.querySelector("body");
        body.style.padding = "10px";
        body.style.margin = 0;
        body.style.backgroundColor = "black";

        let count = 1;

        createContainer()
        function createContainer(){
            const container = document.createElement("div");
            container.style.height = "200px";
            container.style.width = "580px";
            container.style.display = "flex";
            container.style.justifyContent = "start"
            container.style.alignItems = "center";
            container.style.gap = "18px";
            container.style.flexWrap = "wrap";
            container.style.position = "relative"
            body.appendChild(container)
            createCircles(container, 5)
            createProgressBar(container)
            pbTracker(container)
            buttons()
            defaultStart()
        }

        function createCircles(container, circleCount){
            for(let i = 0; i< circleCount; i++){
                const circle = document.createElement("div");
                circle.style.height = "100px";
                circle.style.width = "100px";
                circle.style.borderRadius = "50%";
                circle.style.border = "1px solid green";
                circle.style.position = "absolute";
                circle.id = `circle${i+1}`;
                circle.style.left = `${i * 120}px`;
                circle.style.backgroundColor = "white";
                circle.style.boxShadow = "0 0 25px white"
                circle.style.zIndex = "1";
                container.appendChild(circle)
            }
        }
        function defaultStart(){
            circle1.style.backgroundColor = "green";
            circle1.style.boxShadow = "0 0 25px green";
        }

        function createProgressBar(container){
            const pb = document.createElement("div");
            pb.style.height = "10px"
            pb.style.width = "580px"
            pb.style.border = "1px solid green";
            pb.style.position = "absolute";
            container.appendChild(pb)
        }

        function pbTracker(container){
            const tracker = document.createElement("div")
            tracker.style.height = "10px"
            tracker.style.width = "100px"
            tracker.style.backgroundColor = "green";
            tracker.id = "tracker";

            container.appendChild(tracker);
        }


        function buttons(){
            const preBtn = document.createElement("button");
            preBtn.style.backgroundColor = "#337ab7";
            preBtn.style.height = "30px";
            preBtn.style.width = "70px";
            preBtn.style.borderRadius = "5px";
            preBtn.style.border = "0px";
            preBtn.style.color = "white"
            preBtn.textContent = "Previous";
            preBtn.style.marginRight = "10px";
            body.appendChild(preBtn);

            const nextBtn = document.createElement("button");
            nextBtn.style.backgroundColor = "#337ab7";
            nextBtn.style.height = "30px";
            nextBtn.style.width = "70px";
            nextBtn.style.borderRadius = "5px";
            nextBtn.style.border = "0px";
            nextBtn.style.color = "white"
            nextBtn.textContent = "Next";
            nextBtn.style.marginRight = "10px";
            body.appendChild(nextBtn);


            const tracker = document.getElementById("tracker")
            nextBtn.addEventListener("click", (e)=>{
                count ++
                tracker.style.width = `${120*(count-1)}px`;
                console.log(count)
                if(count > 5){
                    alert("Max progress reached")
                    count = 5
                }
                console.log(count,'count circle')
                let circleId = document.getElementById(`circle${count}`);
                circleId.style.backgroundColor = "green";
                circleId.style.transition = "background 2s ease-in";
                circleId.style.boxShadow = "0 0 25px green"
                tracker.style.transition = "width 1s ease";
            })
            preBtn.addEventListener("click", (e)=>{
                if(count < 0){
                    alert("click next");
                    count = 1
                }
                let circleId = document.getElementById(`circle${count}`);
                circleId.style.backgroundColor = "grey";
                circleId.style.boxShadow = "0 0 25px white"
                circleId.style.backgroundColor = "white"
                circleId.style.transition = "background 2s ease-out";
                tracker.style.transition = "width 1s ease-out";
                count --
                tracker.style.width = `${120*(count-1)}px`;
                console.log(count)
                defaultStart()
            })
        }