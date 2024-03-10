function calculateMean() {
    const dataPoints = document.getElementById('data_points').value;
    const arr = dataPoints.split(',').map(Number);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const mean = sum / arr.length;
    document.getElementById('inputid').value = "Mean of the dataset: "+ mean;
}
function calculateMedian() {
    let m = 0;
    let k = 0;
    let result = 0.0;
    const n = parseInt(document.getElementById('dataset_size').value);
    const data = document.getElementById('data_points').value.split(',').map(Number);
    
    if (data.length === 0) {
        alert("No data available");
        return;
    }
    
    // Apply Insertion Sort on Dataset
    for (let i = 1; i < n; ++i) {
        let key = data[i];
        let j = i - 1;
        while (j >= 0 && data[j] > key) {
            data[j + 1] = data[j];
            j = j - 1;
        }
        data[j + 1] = key;
    }
    
    console.log(data);
    
    if (n % 2 === 0) {
        m = n / 2;
        k = (n / 2) - 1;
        result = (data[m] + data[k]) / 2.0;      
    } else {
        m = Math.floor(n / 2);
        result = data[m];
    }

    document.getElementById('inputid').value = "The Median of the whole Dataset: " + result;
}
function calculateMode() {
    let data = document.getElementById("data_points").value.split(",").map(Number);
    let size = data.length;
    let frequency = new Array(size)
    for(let i=0;i<size;i++){
        frequency[i]=0;
    }

    for (let i = 0; i < size; ++i) {
        let current = data[i];
        let counted = false;

        for (let j = 0; j < i; ++j) {
            if (data[j] === current) {
                counted = true;
                break;
            }
        }

        if (!counted) {
            let freq = 1;
            for (let j = i + 1; j < size; ++j) {
                if (data[j] === current) {
                    ++freq;
                }
            }
            frequency[i] = freq;
        }
    }

    let max = frequency[0];
    let mode_index = 0;
    for (let i = 1; i < size; i++) {
        if (frequency[i] > max) {
            max = frequency[i];
            mode_index = i;
        }
    }

    let mode = data[mode_index];
    document.getElementById("inputid").value = "Mode of the data set is: " + mode;
}
function calculateSD() {
    let data = document.getElementById("data_points").value.split(",").map(Number);
    let size = data.length;
    let total_sum = 0.0;
    let sum1 = 0.0;
    
    // First we need to find the mean of the dataset
    for (let i = 0; i < size; i++) {
        sum1 = sum1 + data[i];
    }
    let mean = sum1 / size;

    for (let i = 0; i < size; i++) {
        data[i] -= mean;
        data[i] *= data[i];
        total_sum += data[i];
    }

    let value = total_sum / size;
    let sd = Math.sqrt(value);
    document.getElementById("inputid").value = "Standard Deviation : " + sd;
}
function calculateVariance(){
    let data = document.getElementById("data_points").value.split(",").map(Number);
    let size = data.length;
    let total_sum = 0.0;
    let sum1 = 0.0;
    
    // First we need to find the mean of the dataset
    for (let i = 0; i < size; i++) {
        sum1 = sum1 + data[i];
    }
    let mean = sum1 / size;

    for (let i = 0; i < size; i++) {
        data[i] -= mean;
        data[i] *= data[i];
        total_sum += data[i];
    }

    let value = total_sum / size;
    document.getElementById("inputid").value = "Variance : " + value;


}
function calculateRegression(){
    dataX=document.getElementById("dataset1").value.split(",").map(Number);
    dataY=document.getElementById("dataset2").value.split(",").map(Number);
    size1=dataX.length;
    size2=dataY.length;
    if(size1!=size2){
        alert("Size of the two dataset don't match");
        return;
    }
    let copydataX = new Array(size1);
    for (let i = 0; i < size1; i++) {
        copydataX[i] = dataX[i];
    }

    let sumY = 0.0;
    for (let i = 0; i < size1; i++) {
        sumY += dataY[i];
    }

    let sumX2 = 0.0;
    for (let i = 0; i < size1; i++) {
        copydataX[i] = copydataX[i] * copydataX[i];
    }
    for (let i = 0; i < size1; i++) {
        sumX2 += copydataX[i];
    }

    let term1 = sumY * sumX2;

    let sumX = 0.0;
    for (let i = 0; i < size1; i++) {
        sumX += dataX[i];
    }

    let copyX = new Array(size1);
    for (let i = 0; i < size1; i++) {
        copyX[i] = dataX[i];
    }

    let copyY = new Array(size1);
    for (let i = 0; i < size1; i++) {
        copyY[i] = dataY[i];
    }

    for (let i = 0; i < size1; i++) {
        copyX[i] = copyX[i] * copyY[i];
    }

    let sumXY = 0.0;
    for (let i = 0; i < size1; i++) {
        sumXY += copyX[i];
    }

    let term2 = sumX * sumXY;
    let term3 = size1 * sumX2;
    let term4 = sumX * sumX;
    let a = (term1 - term2) / (term3 - term4);

    let term5 = size1 * sumXY;
    let term6 = sumX * sumY;
    let term7 = size1 * sumX2;
    let term8 = sumX * sumX;
    let b = (term5 - term6) / (term7 - term8);
    document.getElementById("inputid").value = "Y = "+b+"X + "+a;
    



}


