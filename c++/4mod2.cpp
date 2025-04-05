#include <iostream>
#include <vector>
using namespace std;

int countDigits(const vector<int>& nums){
    int count;
    for (int i = 0; i < nums.size(); i++){
        int num = abs(nums[i]);
        int digits = 0;
        if (num == 0) digits = 1;
        else{
            while (num != 0){
                num /= 10;
                digits++;
            }
            if (digits % 2 != 0) count++;
        }
    }
    return count;
}


int main(){
    int size;
    cout << "Введите размер массива" << endl;
    cin >> size;
    vector<int> numbers(size);
    for (int i = 0; i < size; i++){
        cout << i + 1 << " Элемент массива: ";
        cin >> numbers[i];
    }
    cout << countDigits(numbers) << " Чисел(а) содержат нечетное количество цифр" << endl;
    return 0;
}