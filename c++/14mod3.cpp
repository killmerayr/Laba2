#include <iostream>
using namespace std;

bool isPrime(int n){ // Функция для проверки простого числа
    if (n < 2) return false;
    for (int i = 2; i * i <= n; i++){ // Цикл идет до sqrt(n) 
        if (n % i == 0) return false;
    }
    return true;
}


int main(){
    int n, count = 0;
    cout << "Введите количество чисел" << endl;
    cin >> n;
    for (int i = 0; i < n; i++){
        int num;
        cout << i + 1 << " Число: ";
        cin >> num;
        if (isPrime(num)) count++;
    }
    cout << count << " Простых чисел(а)" << endl;
    return 0;
}