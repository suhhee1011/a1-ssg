# SSG(Static Site Generator)
## SSG is a program that creating html file with a text file.

### features
  + command flags
    + -v or -version : show its current version
    + -h or -help : show instruction
    + -i or -input: allow file or folder as input
  
  + create html file from input (a text file or all the text file in the input folder)
  + create html file from input (a md file or all the md file in the input folder)
### Prerequisite

+ open your favorite terminal 
+ Make sure you are in the a1-ssg folder
+ type the following command

 ```c
 npm i [enter]
```


### Uasge

+ To see the version
```c
 node . -v
```

+ To see the help
```c
 node . -h
```

+ To generate html file (example commands) 

    + file name "abc.txt"
      ```c
       node . -i 'abc.txt'
      ```
      
    + folder name "abc"
      ```c
       node . -i abc
      ```    
    + file name "abc.md"
      ```c
       node . -i 'abc.md'
      ```

