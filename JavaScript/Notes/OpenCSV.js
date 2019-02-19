
package main

import (
"bufio"
"fmt"
"os"
)

func main() {
    csvfile1, err := os.Open("data/sample.csv")
    if err != nil {
        fmt.Println(err)
        return
    }
    defer csvfile1.Close()
    scanner := bufio.NewScanner(csvfile1)
    csvfile2, err := os.Create("data/SingleColomReading.csv")
    if err != nil {
        fmt.Println(err)
        return
    }
    writer := bufio.NewWriter(csvfile2)

    nRecords := 0
    for scanner.Scan() {
        n, err := writer.Write(scanner.Bytes())
        if err != nil {
            fmt.Println(n, err)
            return
        }
        err = writer.WriteByte('\n')
        if err != nil {
            fmt.Println(err)
            return
        }
        if nRecords++; nRecords >= 2 {
            break
        }
    }
    if err := scanner.Err(); err != nil {
        fmt.Println(err)
        return
    }
    err = writer.Flush()
    if err != nil {
        fmt.Println(err)
        return
    }
    err = csvfile2.Close()
    if err != nil {
        fmt.Println(err)
        return
    }
}


