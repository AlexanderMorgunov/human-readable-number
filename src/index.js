module.exports = function toReadable (number) {
    let ShowUpTo9 = (numUpTo9) =>
    {
        switch(numUpTo9)
          {
            case 1: 
                return 'one';
                break;
            case 2:
                return 'two';
                break;
            case 3:
                return 'three';
                break;
            case 4:
                return 'four';
                  break;
            case 5: 
                return 'five';
                break;
            case 6: 
                return 'six';
                break;
            case 7:
                return 'seven';
                break;
            case 8:
                return 'eight';
                break;
            case 9:
                return 'nine'
                break;
          }
        }

        let ShowUpTo19 = (numTo19) =>
        {
            switch(numTo19)
            {
                case 10:
                    return 'ten';
                    break;
                case 11:
                    return 'eleven';
                    break;
                case 12:
                    return 'twelve';
                    break;
                case 13:
                    return 'thirteen';
                    break;
                case 14:
                    return 'fourteen';
                    break;
                case 15:
                    return 'fifteen';
                    break;
                case 16:
                    return 'sixteen';
                    break;
                case 17:
                    return 'seventeen';
                    break;
                case 18:
                    return 'eighteen';
                    break;
                case 19:
                    return 'nineteen';
                    break;
            }
        }

        let ShowUpTo90 = (numUpTo90) =>
        {
            numUpTo90 = Math.trunc(numUpTo90/10);
        
            switch(numUpTo90)
            {
              case 2:
                  return 'twenty';
                  break;
              case 3:
                  return 'thirty';
                  break;
              case 4:
                  return 'forty';
                    break;
              case 5: 
                  return 'fifty';
                  break;
              case 6: 
                  return 'sixty';
                  break;
              case 7:
                  return 'seventy';
                  break;
              case 8:
                  return 'eighty';
                  break;
              case 9:
                  return 'ninety'
                  break;
            }
        }

        let ShowUpTo900 = (numUpTo900) =>
        {
            numUpTo900 = Math.trunc(numUpTo900/100);
        
            switch(numUpTo900)
            {
                case 1:
                    return 'one hundred'
              case 2:
                  return 'two hundred';
                  break;
              case 3:
                  return 'three hundred';
                  break;
              case 4:
                  return 'four hundred';
                    break;
              case 5: 
                  return 'five hundred';
                  break;
              case 6: 
                  return 'six hundred';
                  break;
              case 7:
                  return 'seven hundred';
                  break;
              case 8:
                  return 'eight hundred';
                  break;
              case 9:
                  return 'nine hundred'
                  break;
            }
        }

    if(number==10) return 'ten'
    else if(number==0) return 'zero'
    else if((Math.trunc(number/10))==0)
    {
        return ShowUpTo9(number);
    }
    else if((Math.trunc(number/10))<=9 &&(Math.trunc(number/10))>1)
    {
        if(number%10==0) return (`${ShowUpTo90(number)}`);
        return(`${ShowUpTo90(number)} ${ShowUpTo9(number%10)}`); 
    }
    else if((Math.trunc(number/10))==1)
    {
        return ShowUpTo19(number);
    }
    else if(number%100==0) return (`${ShowUpTo900(number)}`)
    {
        if(number%100 == 0) return (`${ShowUpTo900(number)}`)
        else if (number%10==0&&number%100>10) return(`${ShowUpTo900(number)} ${ShowUpTo90(number%100)}`); 
        else if (number%100<=19&&number%100>=10) return(`${ShowUpTo900(number)} ${ShowUpTo19(number%100)}`);
        else if(number%100<=9&&number%100>=1) return(`${ShowUpTo900(number)} ${ShowUpTo9(number%100)}`)
        return(`${ShowUpTo900(number)} ${ShowUpTo90(number%100)} ${ShowUpTo9(number%10)}`);
    }
}
