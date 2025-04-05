#include <iostream>
using namespace std;

bool isPrime(int n){
    if (n < 2) return false;
    for (int i = 2; i * i <= n; i++){
        if (n % i == 0) return false;
    }
    return true;
}


int main(){
    int n, count = 0;
    cout << "Введите количество чичел" << endl;
    cin >> n;
    for (int i = 0; i < n; i++){
        int num;
        cout << i + 1 << " Число: ";
        cin >> num;
        if (isPrime(num)) count++;
    }
    cout << count << " Простых чисел в массиве" << endl;
    return 0;
}